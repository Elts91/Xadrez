import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, ContactShadows, SpotLight } from '@react-three/drei';
import * as THREE from 'three';

function ChessPiece({ position, rotation, type, color = "#c9a227" }: { position: [number, number, number], rotation: [number, number, number], type: 'pawn' | 'knight' | 'rook' | 'king' | 'queen' | 'bishop', color?: string }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      const targetRotationX = rotation[0] + state.mouse.y * 0.1;
      const targetRotationZ = rotation[2] - state.mouse.x * 0.1;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.05);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetRotationZ, 0.05);
    }
  });

  const material = <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />;

  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={position} rotation={rotation} scale={0.8}>
        {/* Base - Common to all pieces */}
        <mesh position={[0, -0.6, 0]} castShadow>
          <cylinderGeometry args={[0.5, 0.6, 0.2, 32]} />
          {material}
        </mesh>

        {type === 'pawn' && (
          <>
            <mesh position={[0, -0.1, 0]} castShadow>
              <cylinderGeometry args={[0.2, 0.5, 0.8, 32]} />
              {material}
            </mesh>
            <mesh position={[0, 0.4, 0]} castShadow>
              <sphereGeometry args={[0.3, 32, 32]} />
              {material}
            </mesh>
          </>
        )}

        {type === 'rook' && (
          <>
            <mesh position={[0, 0, 0]} castShadow>
              <cylinderGeometry args={[0.4, 0.5, 1, 32]} />
              {material}
            </mesh>
            <mesh position={[0, 0.6, 0]} castShadow>
              <cylinderGeometry args={[0.5, 0.4, 0.3, 32]} />
              {material}
            </mesh>
          </>
        )}

        {type === 'knight' && (
          <>
            <mesh position={[0, -0.1, 0]} castShadow>
              <cylinderGeometry args={[0.3, 0.5, 0.8, 32]} />
              {material}
            </mesh>
            <mesh position={[0.1, 0.5, 0]} rotation={[0, 0, 0.4]} castShadow>
              <boxGeometry args={[0.4, 0.7, 0.5]} />
              {material}
            </mesh>
          </>
        )}

        {type === 'bishop' && (
          <>
            <mesh position={[0, 0, 0]} castShadow>
              <cylinderGeometry args={[0.2, 0.5, 1.2, 32]} />
              {material}
            </mesh>
            <mesh position={[0, 0.7, 0]} castShadow>
              <sphereGeometry args={[0.3, 32, 32]} />
              {material}
            </mesh>
            <mesh position={[0, 1.0, 0]} castShadow>
              <sphereGeometry args={[0.1, 16, 16]} />
              {material}
            </mesh>
          </>
        )}

        {type === 'queen' && (
          <>
            <mesh position={[0, 0.1, 0]} castShadow>
              <cylinderGeometry args={[0.2, 0.5, 1.4, 32]} />
              {material}
            </mesh>
            <mesh position={[0, 0.9, 0]} castShadow>
              <sphereGeometry args={[0.35, 32, 32]} />
              {material}
            </mesh>
            <mesh position={[0, 1.2, 0]} rotation={[Math.PI/2, 0, 0]} castShadow>
              <torusGeometry args={[0.2, 0.05, 16, 32]} />
              {material}
            </mesh>
          </>
        )}

        {type === 'king' && (
          <>
            <mesh position={[0, 0.2, 0]} castShadow>
              <cylinderGeometry args={[0.2, 0.5, 1.6, 32]} />
              {material}
            </mesh>
            <mesh position={[0, 1.1, 0]} castShadow>
              <sphereGeometry args={[0.4, 32, 32]} />
              {material}
            </mesh>
            <group position={[0, 1.5, 0]}>
              <mesh castShadow>
                <boxGeometry args={[0.1, 0.4, 0.1]} />
                {material}
              </mesh>
              <mesh castShadow>
                <boxGeometry args={[0.3, 0.1, 0.1]} />
                {material}
              </mesh>
            </group>
          </>
        )}
      </group>
    </Float>
  );
}

function MovingLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame((state) => {
    if (lightRef.current) {
      const time = state.clock.elapsedTime;
      lightRef.current.position.x = Math.sin(time * 0.5) * 12;
      lightRef.current.position.y = Math.cos(time * 0.3) * 12;
      lightRef.current.position.z = Math.sin(time * 0.4) * 5;
    }
  });
  return <pointLight ref={lightRef} intensity={2} color="#c9a227" distance={30} />;
}

function Particles() {
  const count = 200;
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 30;
      p[i * 3 + 1] = (Math.random() - 0.5) * 30;
      p[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return p;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#c9a227" transparent opacity={0.2} sizeAttenuation />
    </points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
        <ambientLight intensity={0.3} />
        
        <SpotLight 
          position={[15, 20, 10]} 
          angle={0.4} 
          penumbra={1} 
          intensity={4} 
          castShadow 
          color="#ffffff"
        />
        <MovingLight />
        
        {/* Chess Pieces - Gold */}
        <ChessPiece position={[-8, 4, -2]} rotation={[0.2, 0.5, 0]} type="king" color="#c9a227" />
        <ChessPiece position={[-4, -5, 1]} rotation={[0.5, 0.8, -0.2]} type="knight" color="#c9a227" />
        <ChessPiece position={[7, 6, -3]} rotation={[-0.1, 0.3, 0.4]} type="queen" color="#c9a227" />
        <ChessPiece position={[9, -4, 0]} rotation={[-0.3, -0.2, 0.1]} type="rook" color="#c9a227" />
        
        {/* Chess Pieces - White/Silver */}
        <ChessPiece position={[-10, -2, -5]} rotation={[0.1, 0.2, 0.3]} type="bishop" color="#ffffff" />
        <ChessPiece position={[4, 3, -4]} rotation={[-0.2, -0.4, 0.1]} type="pawn" color="#ffffff" />
        <ChessPiece position={[-2, 6, -6]} rotation={[0.4, 0.1, -0.2]} type="pawn" color="#ffffff" />
        <ChessPiece position={[12, 1, -2]} rotation={[0.1, 0.5, 0.2]} type="bishop" color="#ffffff" />
        
        <Particles />
        
        <Environment preset="night" />
        <ContactShadows position={[0, -8, 0]} opacity={0.4} scale={40} blur={2.5} far={15} />
      </Canvas>
      
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/60 via-transparent to-deep-black" />
    </div>
  );
}

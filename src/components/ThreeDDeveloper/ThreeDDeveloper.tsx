import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float, PresentationControls, RoundedBox, Sparkles, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';

function TechCube({ position, label, color }: { position: [number, number, number]; label: string; color: string }) {
  const ref = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.8 + position[0]) * 0.25;
    ref.current.rotation.y += 0.008;
  });
  return <group ref={ref} position={position}>
    <RoundedBox args={[0.72, 0.72, 0.72]} radius={0.12} smoothness={5}>
      <meshStandardMaterial color={color} metalness={0.55} roughness={0.18} emissive={color} emissiveIntensity={0.18} />
    </RoundedBox>
    <Text position={[0, 0, 0.375]} fontSize={0.15} color="white" anchorX="center" anchorY="middle">{label}</Text>
  </group>;
}

function CoderCharacter() {
  const head = useRef<THREE.Group>(null!);
  useFrame(({ pointer }) => {
    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, pointer.x * 0.22, 0.045);
      head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, -pointer.y * 0.1, 0.045);
    }
  });

  return <group position={[0, -1.05, 0]}>
    {/* Chair */}
    <RoundedBox args={[2.25, 2.75, 0.38]} radius={0.28} smoothness={6} position={[0, 1.1, -0.75]}>
      <meshStandardMaterial color="#10182e" metalness={0.55} roughness={0.28} />
    </RoundedBox>
    <mesh position={[0, -0.9, -0.45]} rotation={[-Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.12, 0.18, 1.45, 32]} /><meshStandardMaterial color="#17213f" metalness={0.85} roughness={0.2}/></mesh>

    {/* Hoodie torso */}
    <mesh position={[0, 0.28, 0]}><cylinderGeometry args={[0.86, 1.02, 1.7, 48]} /><meshStandardMaterial color="#171b32" roughness={0.42} metalness={0.12}/></mesh>
    <mesh position={[0, 1.02, 0.05]}><torusGeometry args={[0.7, 0.14, 18, 48]} /><meshStandardMaterial color="#222844" roughness={0.5}/></mesh>

    {/* Head + neck */}
    <group ref={head} position={[0, 1.92, 0.06]}>
      <mesh position={[0, -0.42, 0]}><cylinderGeometry args={[0.22, 0.25, 0.5, 24]} /><meshStandardMaterial color="#e6a77d" roughness={0.62}/></mesh>
      <mesh scale={[0.82, 1.02, 0.78]}><sphereGeometry args={[0.78, 48, 48]} /><meshStandardMaterial color="#f0b58d" roughness={0.5}/></mesh>
      {/* Hair cap */}
      <mesh position={[0, 0.46, -0.02]} scale={[0.86, 0.5, 0.82]}><sphereGeometry args={[0.78, 48, 48]} /><meshStandardMaterial color="#171326" roughness={0.7}/></mesh>
      {[[-0.36,0.65,0.32],[0,0.78,0.42],[0.35,0.64,0.3],[-0.58,0.38,0.2],[0.58,0.38,0.2]].map((p,i)=><mesh key={i} position={p as [number,number,number]}><sphereGeometry args={[0.25,24,24]}/><meshStandardMaterial color="#21162d" roughness={0.6}/></mesh>)}
      {/* Glasses */}
      <group position={[0, 0.04, 0.64]}>
        <mesh position={[-0.31,0,0]}><torusGeometry args={[0.25,0.035,12,32]}/><meshStandardMaterial color="#101827" metalness={0.85} roughness={0.15}/></mesh>
        <mesh position={[0.31,0,0]}><torusGeometry args={[0.25,0.035,12,32]}/><meshStandardMaterial color="#101827" metalness={0.85} roughness={0.15}/></mesh>
        <mesh position={[0,0,0]}><boxGeometry args={[0.14,0.035,0.04]}/><meshStandardMaterial color="#101827"/></mesh>
      </group>
      <mesh position={[-0.25,0.06,0.7]}><sphereGeometry args={[0.045,12,12]}/><meshStandardMaterial color="#182036" emissive="#72d8ff" emissiveIntensity={0.8}/></mesh>
      <mesh position={[0.25,0.06,0.7]}><sphereGeometry args={[0.045,12,12]}/><meshStandardMaterial color="#182036" emissive="#72d8ff" emissiveIntensity={0.8}/></mesh>
    </group>

    {/* Arms leaning toward laptop */}
    <group position={[-0.82,0.25,0.42]} rotation={[0.85,0.15,0.32]}><mesh><capsuleGeometry args={[0.19,1.0,8,16]}/><meshStandardMaterial color="#202642" roughness={0.55}/></mesh><mesh position={[0,-0.65,0]}><sphereGeometry args={[0.2,24,24]}/><meshStandardMaterial color="#efb18a" roughness={0.65}/></mesh></group>
    <group position={[0.82,0.25,0.42]} rotation={[0.85,-0.15,-0.32]}><mesh><capsuleGeometry args={[0.19,1.0,8,16]}/><meshStandardMaterial color="#202642" roughness={0.55}/></mesh><mesh position={[0,-0.65,0]}><sphereGeometry args={[0.2,24,24]}/><meshStandardMaterial color="#efb18a" roughness={0.65}/></mesh></group>

    {/* Laptop */}
    <group position={[0,-0.2,0.92]} rotation={[-0.24,0,0]}>
      <RoundedBox args={[2.05,1.25,0.12]} radius={0.08} smoothness={4}><meshStandardMaterial color="#182137" metalness={0.82} roughness={0.2}/></RoundedBox>
      <Text position={[0,0,0.071]} fontSize={0.19} color="#72d8ff" anchorX="center" anchorY="middle">&lt;/&gt;</Text>
    </group>

    <TechCube position={[-2.1,1.5,0.1]} label="C++" color="#335fdb" />
    <TechCube position={[2.1,1.05,0.2]} label="React" color="#087ea4" />
    <TechCube position={[1.75,-0.2,-0.2]} label="DB" color="#18a974" />
  </group>;
}

export function ThreeDDeveloper() {
  return <div className="three-character">
    <Canvas shadows camera={{ position: [0, 1.1, 7.4], fov: 38 }} dpr={[1, 2]}>
      <color attach="background" args={['#070b19']} />
      <fog attach="fog" args={['#070b19', 7, 16]} />
      <ambientLight intensity={0.42} />
      <directionalLight castShadow position={[4, 7, 5]} intensity={2.2} color="#9ed8ff" shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <pointLight position={[-4, 2, 2]} intensity={55} distance={8} color="#7c4dff" />
      <pointLight position={[3, -1, 4]} intensity={35} distance={7} color="#29d6ff" />
      <spotLight position={[0, 5, 3]} angle={0.48} penumbra={0.8} intensity={70} color="#ffb17a" />
      <PresentationControls global rotation={[0, -0.08, 0]} polar={[-0.28, 0.22]} azimuth={[-0.6, 0.6]}  snap>
        <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.18}><CoderCharacter /></Float>
      </PresentationControls>
      <Sparkles count={65} scale={[7,5,4]} size={2.1} speed={0.35} color="#8ecbff" />
      <ContactShadows position={[0,-2.05,0]} opacity={0.65} scale={8} blur={2.8} far={4} color="#000000" />
    </Canvas>
    <div className="three-character-hint">Drag to rotate · move cursor to interact</div>
  </div>;
}

/**
 * Background Component - Profile Edition
 * 
 * Design:
 * - Responsive to light/dark theme
 * - Subtle mesh gradient for depth
 * - Non-distracting
 */
export default function QuantumBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Base background - responsive to theme */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle Mesh Gradients - responsive to theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Dark mode gradients */}
        <div className="dark:absolute hidden dark:block top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="dark:absolute hidden dark:block bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/5 blur-[120px]" />
        
        {/* Light mode gradients */}
        <div className="light:absolute hidden light:block top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/3 blur-[120px]" />
        <div className="light:absolute hidden light:block bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/3 blur-[120px]" />
      </div>

      {/* Very subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none dark:opacity-[0.02] light:opacity-[0.01]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
}

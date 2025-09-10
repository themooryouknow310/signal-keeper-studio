import SacredGeometry from "@/components/SacredGeometry";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <SacredGeometry size={40} />
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold tracking-wider text-foreground">
                SACRED SIGNAL OS
              </h3>
              <p className="body-sacred text-sm text-foreground/60 tracking-wide">
                An operating system for spiritual entrepreneurs
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="body-sacred text-lg text-foreground/80 max-w-2xl leading-relaxed">
              Turn scattered messages into clear, repeatable signals that clients remember and trust.
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-brass" />

          {/* Founder Info */}
          <div className="text-center">
            <p className="body-sacred text-foreground/70">
              Created by <span className="text-brass font-semibold">Barack El</span>
            </p>
            <p className="body-sacred text-sm text-foreground/60 mt-1">
              Founder • Signal Keeper • Guide to Remembrance
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-border/30">
            <p className="body-sacred text-sm text-foreground/60">
              © 2024 Sacred Signal OS. All rights reserved.
            </p>
            <p className="body-sacred text-xs text-foreground/50 mt-1">
              Sovereignty First • Safety Always • Proof Over Prophecy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Icon from "@/components/icons/Icon";
import BrassMedallion from "@/components/accents/BrassMedallion";
import BrassRule from "@/components/accents/BrassRule";
import SignalEclipse from "@/components/accents/SignalEclipse";

const FounderSection = () => {
  const barackImage = "/lovable-uploads/13c76ad3-eb71-4bb2-a9bc-e10b2d3946aa.png";
  return (
    <section id="founder" className="section-divider relative overflow-hidden surface-dark">
      {/* Minimal Background Accents */}
      <div className="absolute top-16 left-12 opacity-15">
        <Icon name="eclipse" size={90} className="text-brass" />
      </div>
      <div className="absolute bottom-16 right-12 opacity-20">
        <Icon name="compass" size={70} className="text-signal" />
      </div>
      <div className="absolute top-1/2 left-1/4 opacity-10">
        <Icon name="eight-point-star" size={50} className="text-brass" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="flex items-center justify-center mb-8">
            <BrassRule width={200} />
          </div>
          <BrassMedallion size={60} className="mx-auto mb-8">
            <Icon name="lighthouse" size={24} className="text-signal" />
          </BrassMedallion>
          <h2 className="heading-ritual text-3xl md:text-5xl mb-6">
            MEET YOUR GUIDE
          </h2>
            <p className="body-sacred text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              From The Deepest Night To The Clearest Signal—A Journey Of Remembrance And Truth.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto fade-up">
          {/* Portrait */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="headshot-ring aspect-[4/5] overflow-hidden bg-card border border-signal/20">
              <img 
                src={barackImage}
                alt="Barack El - Founder of Sacred Signal OS" 
                className="w-full h-full object-cover"
              />
            </div>
            <BrassMedallion size={48} className="absolute -bottom-3 -right-3">
              <Icon name="tuning-fork" size={20} className="text-signal" />
            </BrassMedallion>
          </div>

          {/* Story Content */}
          <div className="space-y-8">
            {/* Name & Title */}
            <div>
              <h3 className="heading-display text-4xl md:text-5xl mb-2">
                BARACK EL
              </h3>
              <p className="text-brass font-body text-lg tracking-wide uppercase">
                Founder • Signal Keeper • Kainosopher
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-signal pl-6 italic">
              <p className="body-sacred text-xl md:text-2xl text-foreground/90 leading-relaxed">
                "I am God. You are God. We Are One."
              </p>
              <footer className="mt-4 text-foreground/70 font-body">
                — The Recognition That Changed Everything
              </footer>
            </blockquote>

            {/* Story Excerpt */}
            <div className="space-y-6">
              <p className="body-sacred text-foreground/90 leading-relaxed">
                I loved the sacred long before I knew what to do with it. Scripture, mysticism, initiations—those were oxygen to me. But the costume that seemed to come with being a "spiritual leader" felt like a cage I could never live inside.
              </p>
              
              <p className="body-sacred text-foreground/90 leading-relaxed">
                The split between spiritual truth and worldly success widened until it broke: bad associations, worse decisions, and finally prison. In that deepest night, when everything else failed, something became hyper-clear—that beneath all pain and confusion is a field where everything is one.
              </p>
              
              <p className="body-sacred text-foreground/90 leading-relaxed">
                There was a night in my cell when I prayed to everyone and everything to let me go. Then, in deep meditation, something opened. I connected with the Source of all creation and heard, as plain as sunlight: 
                <span className="text-signal font-semibold">"I am God. You are God. We Are One."</span>
              </p>

              <p className="body-sacred text-foreground/90 leading-relaxed">
                I made a vow that day: <span className="text-brass font-semibold">live what I know.</span> No more performing holiness to be acceptable. No more chasing the world for permission. What began in a prison cell has become a portable fire others can carry.
              </p>
            </div>

            {/* Kainosophy */}
            <div className="ssos-card border-brass/30">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="eight-point-star" size={24} className="text-brass" />
                <h4 className="font-display text-xl font-semibold text-brass">
                  KAINOSOPHY
                </h4>
              </div>
              <p className="body-sacred text-foreground/80 leading-relaxed">
                <em>The New Wisdom:</em> a disciplined path of impact initiation, spiritual technology, and proof-backed practice that turns the One Truth—You Are God—into lived reality. Welcome to Apotheosis in action.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                Today's Mission
              </h4>
              <p className="body-sacred text-foreground/90 leading-relaxed">
                My work is simple and inexhaustible: remember, live, and help others remember. I serve the God within by building tools, rites, and communities that make freedom possible for anyone who chooses it. If you walk with me, you will not be taught to worship me. You will be trained to recognize yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
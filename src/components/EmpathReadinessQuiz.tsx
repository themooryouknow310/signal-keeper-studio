import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import SignalLineDivider from "@/components/accents/SignalLineDivider";
import MetatronsCube from "@/components/accents/MetatronsCube";

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
    category: 'ready' | 'growing' | 'exploring';
  }[];
}

interface QuizResult {
  category: 'ready' | 'growing' | 'exploring';
  title: string;
  emoji: string;
  description: string;
  action: string;
  buttonText: string;
  buttonAction: () => void;
}

const EmpathReadinessQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "How does your sensitivity currently impact your business?",
      options: [
        { text: "I avoid sales because it feels manipulative", score: 2, category: 'growing' },
        { text: "I undercharge because I feel guilty asking for money", score: 2, category: 'growing' },
        { text: "I get overwhelmed by client emotions and energy", score: 1, category: 'exploring' },
        { text: "I struggle with boundaries and over-deliver", score: 3, category: 'ready' }
      ]
    },
    {
      id: 2,
      question: "What happens when you try traditional business tactics?",
      options: [
        { text: "I feel drained and inauthentic", score: 3, category: 'ready' },
        { text: "I attract the wrong clients", score: 2, category: 'growing' },
        { text: "I burn out quickly", score: 2, category: 'growing' },
        { text: "I second-guess my expertise", score: 1, category: 'exploring' }
      ]
    },
    {
      id: 3,
      question: "Where are you in your empath entrepreneur journey?",
      options: [
        { text: "Just starting, overwhelmed by business basics", score: 1, category: 'exploring' },
        { text: "Earning some income but inconsistent", score: 2, category: 'growing' },
        { text: "Ready to scale but need better systems", score: 3, category: 'ready' },
        { text: "Successful but want alignment with my values", score: 3, category: 'ready' }
      ]
    },
    {
      id: 4,
      question: "What's your biggest empath business challenge?",
      options: [
        { text: "Setting energetic boundaries with clients", score: 3, category: 'ready' },
        { text: "Pricing my intuitive/empathic gifts", score: 2, category: 'growing' },
        { text: "Marketing without feeling salesy", score: 2, category: 'growing' },
        { text: "Managing emotional overwhelm", score: 1, category: 'exploring' }
      ]
    },
    {
      id: 5,
      question: "How ready are you to invest in your empath entrepreneur transformation?",
      options: [
        { text: "Very ready, need the right program", score: 3, category: 'ready' },
        { text: "Ready but need to understand the approach", score: 2, category: 'growing' },
        { text: "Considering it but have questions", score: 2, category: 'growing' },
        { text: "Just exploring options", score: 1, category: 'exploring' }
      ]
    }
  ];

  const scrollToApply = () => {
    const applySection = document.getElementById('apply');
    applySection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOriginStory = () => {
    window.open('/origin-story-studio', '_blank');
  };

  const scrollToResources = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: number[]) => {
    let totalScore = 0;
    const categoryScores = { ready: 0, growing: 0, exploring: 0 };

    finalAnswers.forEach((answerIndex, questionIndex) => {
      const selectedOption = questions[questionIndex].options[answerIndex];
      totalScore += selectedOption.score;
      categoryScores[selectedOption.category]++;
    });

    // Determine result category based on highest category count and total score
    let resultCategory: 'ready' | 'growing' | 'exploring';
    
    if (categoryScores.ready >= 3 || totalScore >= 12) {
      resultCategory = 'ready';
    } else if (categoryScores.growing >= 3 || totalScore >= 8) {
      resultCategory = 'growing';
    } else {
      resultCategory = 'exploring';
    }

    const results: Record<string, QuizResult> = {
      ready: {
        category: 'ready',
        title: 'Sacred Signal Ready',
        emoji: '🌟',
        description: 'You\'re a seasoned empath entrepreneur who recognizes your sensitivity as a business asset. You\'re ready to transform your current challenges into your greatest strengths with the right strategic framework.',
        action: 'You\'re perfectly positioned for Sacred Signal OS. Your awareness of the challenges and readiness to invest make you an ideal candidate for rapid transformation.',
        buttonText: 'START YOUR APPLICATION TODAY',
        buttonAction: scrollToApply
      },
      growing: {
        category: 'growing',
        title: 'Growing Empath',
        emoji: '🌱',
        description: 'You\'re experiencing the classic empath entrepreneur challenges but aren\'t quite ready for our intensive program yet. You need more foundation and clarity first.',
        action: 'The Origin Story Studio is perfect for you. It will help you crystallize your message and build confidence before you\'re ready for Sacred Signal OS.',
        buttonText: 'EXPLORE ORIGIN STORY STUDIO',
        buttonAction: scrollToOriginStory
      },
      exploring: {
        category: 'exploring',
        title: 'Curious Explorer',
        emoji: '🔍',
        description: 'You\'re just beginning to understand how your empathic nature impacts your business. This is a beautiful starting point, and you need nurturing and education before structured transformation.',
        action: 'Start with our free resources to build your foundation. When you\'re ready to take the next step, we\'ll be here to support your journey.',
        buttonText: 'ACCESS FREE RESOURCES',
        buttonAction: scrollToResources
      }
    };

    setResult(results[resultCategory]);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult(null);
  };

  if (showResult && result) {
    return (
      <section className="section-divider relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/4 left-0 transform -translate-x-1/2">
          <MetatronsCube size={120} className="text-brass/8 animate-pulse" />
        </div>
        
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-12">
                <div className="flex justify-center mb-8">
                  <SignalLineDivider />
                </div>
                <h2 className="heading-ritual text-3xl md:text-5xl mb-6 glow-text">
                  YOUR EMPATH ENTREPRENEUR PROFILE
                </h2>
              </div>

              <Card className="ssos-card max-w-2xl mx-auto">
                <CardContent className="p-12 text-center">
                  <div className="text-6xl mb-6">{result.emoji}</div>
                  <h3 className="ssos-card-title text-3xl mb-6">
                    {result.title.toUpperCase()}
                  </h3>
                  <p className="body-premium text-lg text-foreground/80 mb-8 leading-relaxed">
                    {result.description}
                  </p>
                  <div className="border-t border-brass/30 pt-8 mb-8">
                    <p className="body-premium text-foreground/90 leading-relaxed">
                      {result.action}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Button 
                      size="lg"
                      className="cinema-glow bg-signal text-background hover:bg-signal/90 border-2 border-signal font-body font-medium px-8 py-4 text-lg motion-glow-hover rounded-full w-full"
                      onClick={result.buttonAction}
                    >
                      {result.buttonText}
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="border-brass/30 text-foreground/70 hover:bg-brass/10 font-body px-8 py-4 rounded-full w-full"
                      onClick={resetQuiz}
                    >
                      RETAKE QUIZ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section className="section-divider relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 transform translate-x-1/2">
        <MetatronsCube size={120} className="text-brass/8 animate-pulse" />
      </div>
      
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="flex justify-center mb-8">
                <SignalLineDivider />
              </div>
              <h2 className="heading-ritual text-3xl md:text-5xl mb-6 glow-text">
                ARE YOU READY FOR EMPATH ENTREPRENEUR SUCCESS?
              </h2>
              <p className="body-premium text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Discover your readiness level and get personalized guidance for your unique empathic entrepreneur journey.
              </p>
            </div>

            <Card className="ssos-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="body-premium text-sm text-foreground/60">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="body-premium text-sm text-foreground/60">
                      {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-background border border-brass/30 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-signal to-cyan h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="mb-8">
                  <h3 className="ssos-card-title text-xl mb-8 leading-relaxed">
                    {questions[currentQuestion].question}
                  </h3>
                </div>

                {/* Options */}
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="w-full text-left justify-start p-6 h-auto border-brass/30 text-foreground hover:bg-signal/10 hover:border-signal/50 font-body text-base leading-relaxed"
                      onClick={() => handleAnswer(index)}
                    >
                      {option.text}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EmpathReadinessQuiz;
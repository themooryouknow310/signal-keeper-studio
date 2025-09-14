import React from "react";
import { Button } from "@/components/ui/button";

type ErrorBoundaryProps = { children: React.ReactNode };

type ErrorBoundaryState = { hasError: boolean; error?: Error };

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You could send this to your monitoring here
    console.error("React Error Boundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center bg-background text-foreground p-6">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
            {this.state.error?.message && (
              <p className="text-muted-foreground mb-6">{this.state.error?.message}</p>
            )}
            <Button onClick={this.handleReload} variant="default">Reload</Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

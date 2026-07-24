import React, { ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  sectionName: string;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * SectionErrorBoundary Component
 * Wraps individual sections to prevent one error from crashing the entire app
 * If a section fails, it shows a graceful error message instead of crashing
 */
export default class SectionErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`Error in ${this.props.sectionName}:`, error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative py-20 sm:py-32 bg-background">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6">
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-red-400 mb-2">
                    {this.props.sectionName} Error
                  </h3>
                  <p className="text-red-300/80 mb-4">
                    Something went wrong loading this section. Please try refreshing the page.
                  </p>
                  {process.env.NODE_ENV === 'development' && this.state.error && (
                    <details className="mb-4 cursor-pointer">
                      <summary className="text-sm text-red-300/60 hover:text-red-300">
                        Error details (development only)
                      </summary>
                      <pre className="mt-2 text-xs bg-black/30 p-3 rounded overflow-auto text-red-300/60">
                        {this.state.error.toString()}
                      </pre>
                    </details>
                  )}
                  <button
                    onClick={this.handleReset}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 transition-colors"
                  >
                    <RefreshCw size={16} />
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

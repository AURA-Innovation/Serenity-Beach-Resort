"use client";

import React from "react";
import { Button } from "@/components/ui/button";

type State = { hasError: boolean; error?: Error };

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
    // Simple recovery: reload the app shell
    location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-md text-center space-y-4">
            <h2 className="text-2xl font-semibold">Something went wrong</h2>
            <p className="text-sm text-gray-600">
              Please try again. If the issue persists, contact us.
            </p>
            <div className="flex items-center justify-center gap-2">
              <Button onClick={this.handleRetry} className="bg-[#007bff] hover:bg-[#0056b3]">
                Try again
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">Contact us</a>
              </Button>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <pre className="text-xs text-left whitespace-pre-wrap bg-gray-50 p-3 rounded border">
                {this.state.error.message}
              </pre>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
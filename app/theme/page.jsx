import { ThemeToggle } from "@/components/theme-toggle"

export default function ThemePage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Theme Settings</h1>

      <div className="flex flex-col items-start gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Toggle Theme</h2>
          <p className="text-muted-foreground mb-4">Switch between light and dark mode</p>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}


# Contribution Guide

Thank you for considering contributing to our Next.js project! This guide will help you understand our project structure and contribution process.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Code Standards](#code-standards)
5. [Pull Request Process](#pull-request-process)
6. [Documentation](#documentation)

## Project Structure

```
project-root/


├── .github/                # GitHub specific files (workflows, templates)
│   ├── workflows/            # CI/CD pipeline configurations#
│   └── ISSUE_TEMPLATE/       # Templates for different issue types#
├── public/                 # Static assets served by Next.js#
├── app/                    # App router pages and layouts#
│   ├── (auth)/               # Authentication related routes (grouped)#
│   ├── (dashboard)/          # Dashboard related routes (grouped)#
│   ├── api/                  # API routes#
│   └── layout.tsx            # Root layout#
├── components/             # Reusable React components#
│   ├── ui/                   # UI components (buttons, inputs, etc.)#
│   ├── layout/               # Layout components (header, footer, etc.)#
│   └── features/             # Feature-specific components#
├── hooks/                  # Custom React hooks#
├── lib/                    # Utility functions and shared logic#
│   ├── api/                  # API client and related utilities#
│   ├── auth/                 # Authentication helpers#
│   └── utils/                # General utilities#
└── stores/                 # State management (Zustand, etc.)#
├── .eslintrc.js            # ESLint configuration#
├── .prettierrc             # Prettier configuration#
├── .env.example            # Example environment variables#
├── jest.config.js          # Jest configuration#
├── next.config.js          # Next.js configuration#
├── tailwind.config.js      # Tailwind CSS configuration#
├── tsconfig.json           # TypeScript configuration#
└── package.json            # Project dependencies and scripts#
```

## Getting Started

### Prerequisites

- Node.js (version specified in package.json)
- npm or yarn
- Git

### Setup

1. **Fork the repository**:
   Click the "Fork" button on GitHub to create your own copy.

2. **Clone your fork**:

   ```bash
   git clone https://github.com/soab42/projectA.git
   cd projectA
   ```

3. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn
   ```

4. **Set up environment variables**:

   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` with appropriate values.

5. **Start the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Development Workflow

/**\*\***\***\*\*** ✨ Codeium Command 🌟 **\*\***\***\*\***/

1. **Create a new branch**:

   ```bash
   git checkout -b name/descriptive-page-name
   git checkout -b feature/descriptive-feature-name
   git checkout -b fix/issue-description
   ```

2. **Make your changes**: Implement your feature or fix.

3. **Commit your changes** following the [Conventional Commits](https://www.conventionalcommits.org/) specification:

   ```bash
   git commit -m "feat: add new button component"
   # or
   git commit -m "fix: resolve navigation issue on mobile"
   ```

4. **Push to your fork**:

   ```bash
   git push origin feature/descriptive-feature-name
   ```

5. **Create a pull request** on GitHub.

## Code Standards

- **Formatting**: We use Prettier for code formatting
- **Linting**: ESLint is configured for code quality
- **Component structure**:
  - Prefer functional components with hooks
  - Use named exports
  - Keep components focused on a single responsibility

### Naming Conventions

- **Files**:
  - React components: PascalCase (e.g., `Button.tsx`)
  - Utilities, hooks: camelCase (e.g., `useWindowSize.ts`)
- **CSS**:
  - Use Tailwind CSS utility classes when possible
  - For custom CSS modules, use kebab-case for classnames

## Pull Request Process

### PR Template

When creating a PR, please use this format:

```markdown
## Description

[Provide a brief description of your changes]

## Type of Change

- [ ] New feature (non-breaking change adding functionality)
- [ ] Bug fix (non-breaking change fixing an issue)
- [ ] Breaking change (fix or feature causing existing functionality to change)
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring (no functional changes)

## Related Issues

Fixes #[issue number]

## How to Test

[Provide clear steps to test your changes]

## Screenshots (if applicable)

[Add screenshots here]

## Checklist

- [ ] My code follows the project code style
- [ ] I have added tests that prove my fix/feature works
- [ ] New and existing tests pass locally with my changes
- [ ] I have updated the documentation accordingly
- [ ] My changes don't introduce new warnings or errors
- [ ] I have performed a self-review of my own code
```

### Review Process

1. All PRs require at least one review from a core team member
2. CI checks must pass before merging
3. Feedback must be addressed before approval
4. Squash and merge is our preferred merge strategy

## Documentation

- Add JSDoc comments to functions and components
- Update README.md when adding new features
- Document any non-obvious code decisions
- For complex features, consider adding usage examples

---

Thank you for contributing to our project! If you have any questions, feel free to reach out to the core team.

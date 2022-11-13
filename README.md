## Introduction of the project

This GitHub repo hosts the code for frontend app.

## Prerequisites to contributing

Familiarity with git, GitHub, ReactJS, TypeScript etc. --
[Resources on docs](https://docs.google.com/document/d/1gb4guaKaanr3YSyFiZLnCvzCEcgNacph0eE5RN06Yno/edit?usp=sharing)

## Environment setup

- (If you don't already have git set up) [Git setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup), [alternative tutorial](https://docs.github.com/en/github/getting-started-with-github/set-up-git)
- Set up your coding text editor. We recommend VS Code with the [Typescript compiler](https://code.visualstudio.com/docs/languages/typescript#_installing-the-typescript-compiler). But any IDE you're used to working with is fine.
- Install NodeJS 
  - when installing NodeJS, please make sure to install version 16

## Run local server

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## GitHub development process

For details, see the [Git workflow documentation](https://sheer-salmon-602.notion.site/VSKY-Git-Workflow-cee2cf44a68446e0882febd2d3b5c4c3)

1. Ask the engineering circle to add you to <https://github.com/vnsgyoga/frontend-react>

2. Clone the <https://github.com/vnsgyoga/frontend-react> repo

   ```shell
   git clone https://github.com/ryuuyoga/gatsby-mvp.git
   ```

3. Every time when you want to send a Pull Request, do the following steps:

   ```shell
   # Return to the main branch
   git checkout main
   # Get the latest changes from remote
   git pull
   # Create a new branch for your new changes
   git checkout -b new_branch_name
   # < Make some code changes >
   # Stage changes for commit
   git add -A
   # Create a commit in your branch
   git commit -m "commit message"
   # Push your update branch to remote
   git push -u origin new_branch_name
   ```

4. Create a Pull Request (PR) and request review. ([Example](https://sheer-salmon-602.notion.site/VSKY-Git-Workflow-cee2cf44a68446e0882febd2d3b5c4c3))

5. Delete your branch once it is checked in, or when it becomes obsolete. Help keep our repo clean!

## Code reviews

When we start to have real users, we will require code reviews prior to pushing
code to the main branch.

If you are new to code reviews, you can skim a few op-eds about the process on
the internet. General guidelines:

PR author:

- Keep changes small and self-contained. This makes it easier to review in a
  timely manner, since your reviewer won't have to block off a whole hour.
- Do a final review of your change (look at your own diff).
- Try to test your code before review.
- Make commits searchable. If we need to revert, we should easily
  understand what each change is doing.

PR reviewer:

- Ask clear questions and give constructive feedback. A bit of positivity goes a long way.

## Coding Convention

### Pull Request name

Pull Request name should be the same with the user story / ticket name.

### Branch name

Branch name should be copied when create branch on Jira in the format: <Issue key> - <Isuue summary>
For example: `VSKY-35-update-readme-for-frontend-react`

### CSS

We will follow BEM methodologies for naming class name (when you are not using Tailwind). For details, see the [documentation](https://getbem.com/introduction/) 

## Code quality

Code style guidelines ease understanding and maintaining code. Automated checks
enforce some of the guidelines.

We recommend you use [VS Code](https://code.visualstudio.com/docs/introvideos/basics).
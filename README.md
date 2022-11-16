# Introduction of the project

This GitHub repo hosts the code for frontend app.

<details open="open">
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#prerequisites">Prerequisites to contributing</a>
    </li>
    <li><a href="#environment-setup">Environment setup</a></li>
    <li><a href="#run-local-server">Run local server</a></li>
    <li><a href="#github-developement-process">GitHub development process</a></li>
    <li><a href="#code-reviews">Code reviews</a></li>
    <li>
      <a href="#coding-convention">Coding Convention</a>
    </li>
    <li><a href="#code-quality">Code quality</a></li>
  </ul>
</details>

---
<h2 id="prerequisites">Prerequisites to contributing</h2>

Familiarity with git, GitHub, ReactJS, TypeScript etc. --
[Resources on docs](https://chestnut-stock-4f5.notion.site/Tech-Stack-e99314710abd437fae145cac5380e93e)

---
<h2 id="environment-setup">Environment setup</h2>

- (If you don't already have git set up) [Git setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup), [alternative tutorial](https://docs.github.com/en/github/getting-started-with-github/set-up-git)
- Set up your coding text editor. We recommend VS Code with the [Typescript compiler](https://code.visualstudio.com/docs/languages/typescript#_installing-the-typescript-compiler). But any IDE you're used to working with is fine.
- Install [NodeJS](https://nodejs.org/en/download/) (Recommend version 16) 

---
<h2 id="run-local-server">Run local server</h2>

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

---
<h2 id="github-developement-process">GitHub development process</h2>

For details, see the [Git workflow documentation](https://chestnut-stock-4f5.notion.site/Git-Workflow-cb2efab16709492ab7911d440fa83ee5)

1. Ask the engineering circle to add you to <https://github.com/vnsgyoga/frontend-react>

2. Clone the <https://github.com/vnsgyoga/frontend-react> repo

   ```
   git clone https://github.com/vnsgyoga/frontend-react.git
   ```

3. Before working on a task, do the following steps:

   ```
   # Return to the main branch
   git checkout main
   # Get the latest changes from remote
   git pull
   # Create a new branch for your new changes
   git checkout -b new_branch_name
   ```

4. After finish editing your code:

   ```
   # < Make some code changes >
   # Stage changes for commit
   git add -A
   # Create a commit in your branch
   git commit -m "commit message"
   # Push your update branch to remote
   git push -u origin new_branch_name
   ```


5. Create a Pull Request (PR) and request review. ([Example](https://chestnut-stock-4f5.notion.site/Git-Workflow-cb2efab16709492ab7911d440fa83ee5))

6. Delete your branch once it is checked in, or when it becomes obsolete. Help keep our repo clean!

---
<h2 id="code-reviews">Code reviews</h2>

For details, see the [Code review guide](https://chestnut-stock-4f5.notion.site/Code-Review-f164761b75204477a1801d38ce84a50d).

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

---
<h2 id="coding-convention">Coding Convention</h2>

### Pull Request name

- Should be the same with the user story / ticket name.

### Branch name

- Should be copied when create branch on Jira in the format: `<Issue key>-<Issue summary>`.\
For example: `VSKY-35-update-readme-for-frontend-react`

### CSS

- We will follow BEM methodologies for naming class (when you are not using Tailwind). For details, see the [documentation](https://getbem.com/introduction/) 

---
<h2 id="code-quality">Code quality</h2>

To ensure your project’s code stays simple, readable, and easy to contribute to, we: 
- Use [Prettier](https://prettier.io/) for code formatter.
- Use [EsLint](https://eslint.org/) for identifying and reporting on patterns found in ECMAScript/JavaScript code, make our code more consistent and avoiding bugs.
- Use [TypeScript](https://www.typescriptlang.org/) to improve the developers experience and enable ability to add type safety to the project.
  
### Check your own diff

Before pushing your changes to the repository, make sure you check your own diff. For details, see the [Code review guide](https://chestnut-stock-4f5.notion.site/Code-Review-f164761b75204477a1801d38ce84a50d)
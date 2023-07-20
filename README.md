# Semantic Kernel In Action

## Objectives
 - **`Learn`** | What is Semantic Kernel? What are the Core Concepts & Tools? How does it fit into the broader Generative AI ecosystem and dialog?
 - **`Apply`** | How is Semantic Kernel used in modern web apps? What samples/apps exist? What are the costs, constraints and dependencies for usage?
 - **`Build`** | Use the knowledge to create one real-world demo that solves an existing problem for developers, or enhances default developer experience.
 - **`Share`** | Capture product feedback, share learnings and best practices from usage in blog articles, visuals and samples.


## Learning Resources

Evolving list of resources to explore Semantic Kernel in action. 

* [Semantic Kernel Learning Hub](https://learn.microsoft.com/en-us/semantic-kernel/) - Documentation
  - [Quickstart](https://learn.microsoft.com/en-us/semantic-kernel/get-started/quick-start-guide/?toc=/semantic-kernel/toc.json&tabs=Csharp) | Python  [Quickstart](https://github.com/microsoft/semantic-kernel/tree/main/python) and [Notebooks](https://github.com/microsoft/semantic-kernel/tree/main/samples/notebooks/python)
  - [Learn Prompt Engineering](https://learn.microsoft.com/en-us/semantic-kernel/prompt-engineering/)
  - [Orchestrate AI plugins](https://learn.microsoft.com/en-us/semantic-kernel/ai-orchestration/)
  - [Store and retrieve memory]()
  - Run Sample TS/React Apps
    - [Chat Copilot app](https://learn.microsoft.com/en-us/semantic-kernel/samples-and-solutions/copilot-chat?tabs=Windows,Powershell) - build basic chatbot
    - [GitHub Repo Q&A Bot](https://learn.microsoft.com/en-us/semantic-kernel/samples-and-solutions/github-repo-qa-bot) - ask about repo
    - [Book Creator App](https://learn.microsoft.com/en-us/semantic-kernel/samples-and-solutions/book-creator) - chain prompts, skills 
  - Deploy Semantic Kernel to Azure
    - [As a Web App Service](https://learn.microsoft.com/en-us/semantic-kernel/deploy/deploy-to-azure)
    - [As a Serverless Function](https://devblogs.microsoft.com/semantic-kernel/how-to-deploy-semantic-kernel-to-azure-in-minutes/)
  - Integrate with Azure Cognitive Search (ACS)
    - 🆕 [Vector Search in ACS](https://techcommunity.microsoft.com/t5/azure-ai-services-blog/announcing-vector-search-in-azure-cognitive-search-public/ba-p/3872868)
    - 🆕 [SK integration with Vector Search](https://devblogs.microsoft.com/semantic-kernel/announcing-semantic-kernel-integration-with-azure-cognitive-search/)
* Developer Tools & Resources
  - [Visual Studio Code Tools](https://learn.microsoft.com/en-us/semantic-kernel/vs-code-tools/)
  - [Semantic Kernel Repo](https://github.com/microsoft/semantic-kernel)
  - [Semantic Kernel Discord](https://aka.ms/sk-community)
* Articles, Talks & Training
  - [Introducing Semantic Kernel](https://www.linkedin.com/learning/introducing-semantic-kernel-building-ai-based-apps/introducing-semantic-kernel?u=0) - Linked In Course
  - [Build AI Solutions with Semantic Kernel](https://www.youtube.com/watch?v=EB90z-ugdl8) - #MSBuild
  - [Latest News For Developers](https://devblogs.microsoft.com/semantic-kernel/category/semantic-kernel/) - DevBlogs


 ## About Website 

 The repo uses the [Astro Starlight](https://astro.build/themes/details/starlight/) documentation theme. I started with [my custom template](https://github.com/30DaysOf/astro-starlight-ghpages) which is pre-configured to deploy site to GitHub Pages. The short term goal is to use it to document learning journey. The long term goal is to use it as a sandbox for exploring ideas driven by semantic kernel capabilities.
 
 _For convenience, a short review of original setup process is reproduced below_.

 ```bash
 # 1. Install Node.js if needed (I prefer LTS versions)
 $ nvm use --lts
Now using node v18.16.0 (npm v9.6.7)

# 2. Scaffold an Astro Starlight project 
#    Specify "website" as destination folder 
#    This scaffolds site and runs `npm install` by default
$ npm create astro@latest -- --template starlight

# 3. Preview it locally 
$ cd website
$ npm run dev

# 4. Build for production (pwd = `website/`)
$ npm run build

# 5. View production build (pwd = `website/`)
$ npm run preview

# 6. Deploy to GitHub Pages (use official `withastro/action`)
#    See: https://docs.astro.build/guides/deploy/github/
#
#    If you start with custom template, just set site & base
#    properties in `website/astro.config.js`.
#    Then choose "GitHub Actions" under  `Settings > Pages` 
#    Commit code changes to trigger action to rebuild/publish!
#
# 6. Open the browser to the GitHub pages endpoint for repo 🎉
$ open https://30daysof.github.io/semantic-kernel/

```
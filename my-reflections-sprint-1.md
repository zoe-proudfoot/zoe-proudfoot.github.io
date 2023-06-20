# My Reflections - Sprint One 
In addition to the challenge specific reflections, answer the following questions:
# Command Line Primer 
### In a couple of sentences, how would you describe the command line in plain English? Can you think of an analogy for it?
The Git Command Line is a text-based interface that allows you to interact with Git, a version control system. 
It provides a way to execute various commands to manage your code, such as creating repositories, committing changes, branching, and merging.
An anology for the Git Command Line could be a control panel in a spaceship, where you enter specific commands to navigatem make adjustments, and control the spacecraft's trajectory and systems.
### Did you stick to the timebox guidelines? If not, what change would you make next time?
I stuck to the guidelines.
### Name 5 commands you used, and what they do.
1. Git clone: This command brings a repository from a source such as GitHub and creates a matching version on your computer.
2. Git init: This command initialises a new Git Repository. This turns the current folder into a Git folder
3. Git help: This command brings up 21 common commands when you are not sure what command to use.
4. Git status: This checks the status of your repo. It sees which files are inside it, which changes need to be made, etc.
5. Git branch: This command allows you to make changes of your own when you are collaborating with others. 
### Did you learn anything unexpected?
Actually, I did. Before this sprint, my knowledge on Git and how it worked was non-existant. So, although I have a long way to go. I do think I learnt something unexpected and I look forward to learning more.
# Version Control with Git 
### What's the difference between git and GitHub?
Git is the version control system that manages the tracking and history of changes in a project, while GitHub is a hosting service that utilizes Git to provide collaboration, social features, and a web-based interface for managing Git repositories.
### Can you think of an analogy to describe them?
Think of Git as a chef's recipe book. The chef uses the recipe book to keep track of all the recipes they have created and modified over time. The recipe book allows the chef to make changes, add new recipes, and experiment with different versions of their dishes. The recipe book is kept in the chef's kitchen and is accessible only to them.
Now, imagine GitHub as a cooking community or a shared kitchen. It's a place where multiple chefs can come together, share their recipe books, collaborate on recipes, and work on cooking projects together. Each chef brings their own recipe book (Git repository) to the shared kitchen and uses GitHub to store, organize, and collaborate on their recipes with others. GitHub provides a platform where chefs can share their recipes, discuss cooking techniques, give feedback on each other's dishes, and work on culinary projects collectively.
In this analogy, Git is like the individual chef's recipe book, a local version control system that tracks changes and allows the chef to manage their recipes. GitHub is like the shared kitchen or cooking community, a web-based platform that hosts and facilitates collaboration among multiple chefs (developers) using their individual Git repositories.
Just as the recipe book and shared kitchen serve different purposes but complement each other in the culinary world, Git and GitHub have distinct roles but work together to enhance collaboration and version control in software development.
### Do you think you would still remember the difference a week from now if you didn't revisit the material?
Yes, I think I will remember these in a week. The analogy is a good help!
### Did you stick to the timebox suggestions? If not, why not?
At first, I did struggle with some of the set-up process. But once I got the ball rolling, I believe that I did well!
# Install and Explore Git
### What is a Git workflow?
A Git workflow refers to a set of guidelines and practices that define how a team or individual interacts with the Git version control system to manage and collaborate on software development projects. Git workflows provide a structured approach to organizing and tracking changes to code, facilitating collaboration, and maintaining project integrity.
### What did you notice about your own learning? What did you do when you were confused or blocked?
This part of the course was very informative. Beforehand, I had no clue about or how Git even worked. When I was blocked, I would use Google and/or YouTube to look for solutions and keep trying to figure it out.
### Is there anything you'd do differently if you were to repeat the learning exploration again?
Next time, when and if I get stuck, I will ask for help from either a facilitator or fellow cohort mate.
# Track and Commit
### How would you describe stage and commit to your non-tech-savvy friend?
Think of a stage as a way to get ready for a performance. Imagine you're an actor preparing for a play. Before you can step on stage and perform in front of the audience, you need to make sure you have everything in order. You need to put on your costume, memorize your lines, and practice your movements. Staging is similar to this preparation process.
In the context of technology, staging refers to preparing your work before it becomes a part of a bigger project or is shared with others. It's like getting your ideas and changes organized and ready to be included in the final version.
Now let's talk about committing. Committing is like officially saving your work or progress. When you commit something, it's like taking a snapshot of your current state. It's a way of saying, "This is how things look right now, and I want to keep it this way."
To explain it further, imagine you're working on a group project with your classmates. Whenever you finish a task or make changes to your part of the project, you save your work and commit it. It's like saying, "Here's what I've done, and I'm happy with it for now." Committing helps keep track of changes, and it allows others to see and work with your progress.
In the world of technology, when you commit changes to a project, it means you're making those changes permanent and including them as part of the overall work. It's like locking in your contribution so that others can build upon it or review it.
So, in simpler terms, staging is about getting your work ready, like preparing for a performance, and committing is like saving your work officially, similar to taking snapshots or checkpoints in a project.
# Branch, Pull, Merge
### What is main?
In Git, "main" is a default branch name commonly used as the primary branch in a repository. It is created automatically when you initialize a new Git repository, and it typically represents the main line of development or the latest stable version of the project.
The main branch serves as a reference point for other branches and is often used for integrating changes from feature branches or other development branches. Developers usually clone the repository and start working on the main branch, making commits directly to it or creating branches for specific features or bug fixes.
The term "main" has gained popularity as an alternative to "master" for the default branch name. This shift is driven by efforts to promote inclusive language and remove potentially offensive or biased terms from software projects. While "master" has been commonly used in the past, many projects now prefer "main" to reflect a more neutral and inclusive approach.
By default, Git uses "main" as the branch name for new repositories. However, it's worth noting that you can customize the default branch name in Git or choose a different name when creating a new repository. This flexibility allows you to adapt Git to your preferred naming conventions or project requirements.
### Why create a Branch?
Creating a branch in Git is a fundamental feature that allows developers to work on multiple tasks concurrently and in isolation. Here are some reasons why creating branches is important:
1. Isolation of work: Branches enable developers to work on new features, bug fixes, or experiments without interfering with the main codebase. Each branch represents a separate line of development, allowing developers to make changes and test ideas independently
2. Parallel development: With branches, multiple team members can work on different features simultaneously. Each person can create their own branch, make changes, and later merge them back into the main codebase, minimizing conflicts and allowing for faster development.
3. Experimentation and feature development: Branches provide a way to experiment with new ideas or develop new features without affecting the stability of the main codebase. If an experiment or feature doesn't work out, the branch can be discarded without impacting the main codebase.
4. Code review and collaboration: Branches facilitate code review processes. Developers can create a branch, make changes, and then submit it for review by other team members. This allows for collaborative feedback and discussion before merging the changes into the main codebase.
5. Versioning and release management: Branches are commonly used for versioning and release management. For example, a branch can be created for a specific release, allowing bug fixes and updates to be applied to that branch while development continues on the main branch.
6. Hotfixes and bug patches: In case of critical issues or bugs in the production code, a branch can be created specifically to address those problems. This ensures that fixes can be applied quickly and independently from ongoing development work.
Overall, creating branches in Git provides a flexible and efficient way to manage development workflows, promote collaboration, and maintain the stability of the codebase.
### Do the concepts introduced feel intuitive or difficult to understand?  
Now that I’ve watched the videos and tutorials on how to do this, the seem somewhat understand. But I feel that once I have a good go at all of this, I will get the hang of it.
# GitHub Fork & Clone
### What are some examples of when you would fork?
In Git, forking refers to creating a copy of a repository under your own GitHub account. Forking is commonly used in open-source development, where it allows you to make changes to someone else's project without affecting the original repository. Here are some examples of when you would fork a repository:
1. Contributing to a project: If you want to contribute to an open-source project hosted on GitHub, you would typically fork the project's repository. This creates a copy of the repository under your account, which you can freely modify and make changes to.
2. Experimenting with changes: When you want to experiment with new features or modifications to a project, forking allows you to have your own separate copy to work on. This way, you can freely make changes, test them, and iterate without affecting the original project.
3. Submitting pull requests: After forking a repository and making changes, you can submit a pull request to the original project. This is a way to propose your modifications to be merged into the original project. Forking is a crucial step in this collaborative workflow, as it provides a separate space for you to work on your changes.
4. Creating your own version: If you come across a project that serves as a starting point for your own work, forking can be useful. You can fork the repository and then modify it according to your specific requirements. This allows you to maintain your own version of the project while still benefiting from any future updates made to the original repository.
5. Building upon existing projects: Forking enables you to build upon existing projects and create derivative works. By forking a repository, you have the freedom to extend the functionality, customize it, or adapt it to your specific needs
### Did you have any moments where it all clicked? What clicked?
I did. It all clicked when I saved that HTML file onto my computer and opened it to see what the beginning of my blog looked like.
# Setup Repo & Create Blog

### Reflect on this activity. When did you feel frustrated?
This was fun! I did get frustrated at the commit stage and pulling it up onto my GitHub profile, but I got through it!
### If you didn't already know that this is the way websites are made, was it what you pictured? How does the reality of this process differ from your preconceptions?
I did a one day website design course back in highschool. Although, I couldn't remember much of it, putting together the website for this course was fun! I look forward to doing more!
# Thinking like a programmer

### What is your process so far for solving problems?
First, I go to Google or Youtube to look for my answers, because Google has almost everything. I do need to make a habit of going to my classmates and facilitators when I need help, but I will get there. But if I find things too frustrating, I find taking a small break helps.
### Have a look at what the internet says on how to think like a programmer. What patterns do you see? What do you notice?
To think like a programmer, approach problems logically, break them down into smaller tasks, and consider multiple possible solutions. Embrace the mindset of solving puzzles and puzzles, focus on simplicity and efficiency, and continuously seek to learn and improve. Emphasize critical thinking, attention to detail, and the ability to analyze and solve problems step by step.
### What does the internet say about flipped learning? What is flipped learning and flipped classroom? How do you think it will relate to your learning journey?
Flipped learning is an instructional approach where the traditional classroom model is reversed. Students are first introduced to new content or concepts through online resources or pre-recorded lectures outside of class. Classroom time is then dedicated to collaborative activities, discussions, and problem-solving, allowing students to actively engage with the material and receive personalized guidance from the teacher. This approach aims to shift the focus from passive learning to active learning and encourages students to take responsibility for their own learning. 
I thik this will be beneficial to me as I do thrive on the one on one learning. 
# Introduce yourself

### What was it like trying to summarise yourself to a group of strangers? 
Introducing myself to new people is always a nerve-wrecking thing for me and this time wasn't really that much different, but I took it in my stride as I do most things. The Discord introductions seemed a little less daunting though because for some reason, I'm better at writing about myself than I am at speaking about myself. I don have to say that I look forward to this course bringing out a much needed confidence boost.
### Could you feel your ego? Were you self conscious? 
At first I was a little bit self conscious as I usually am. But encouraging words helped to push those doubts aside.
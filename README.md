
# SMS(Student Management System) Newsletter

This repo contains the source code for the Student Management System website for the article:  A/B Testing in Nest.js with [ConfigCat](https://configcat.com) and Amplitude. [Read the blog post here](https://configcat.com/blog/2023/02/10/doing-ab-testing-nest-js/).

The website was built with Nest.js in the backend, and React.js in the frontend.
The A/B test compares two variations of the newsletter's heading on the homepage of the website.

![Newsletter: Control](https://user-images.githubusercontent.com/71462377/202416431-cef9584d-e965-4cd8-8abc-b9da216c11e5.png)

*Newsletter:  A version(Control)*

![Newsletter: Variant](https://user-images.githubusercontent.com/71462377/202416997-d19c79ae-46ce-4b05-a4af-67f0ab8378ee.png)

*Newsletter: B version(Variant)*


## Build & Run
Follow these steps to clone this repository on your computer:
- Click on the green "Code" button in the repository's page and copy the URL in the text field that pops up.
- Open up your command line application.
- Paste and run the command:  `git clone https://github.com/configcat-labs/ab-testing-nestJS-sample.git`.
- Navigate to the newly created folder: "ab-testing-nestJS-sample".

Once you're in the folder, you'll have to run the Nest.js backend and then the React.js frontend.

To run the backend:

Run `npm run start`, or `npm run start:dev` to enable automatic reloading.

To run the frontend, exeute these commands:

1. `cd frontend`
2. `npm run start`

**Info**: You can find the code for the newsletter in the `App.js` file in the frontend folder.
## Learn more

Useful links to technical resources.
- [Nest.js Docs](https://docs.nestjs.com/)
- [ConfigCat Percentage-based Targeting Docs](https://configcat.com/docs/advanced/targeting/#targeting-a-percentage-of-users)
- [Amplitude Node SDK](https://www.docs.developers.amplitude.com/data/sdks/node/)
- [Amplitude Event Segmentation Charts](https://help.amplitude.com/hc/en-us/articles/360052274852)
- [A/B Testing with Feature Flags](https://configcat.com/blog/2022/05/02/what-is-ab-testing/)
- [Feature Flags in Nest.js](https://configcat.com/blog/2022/08/19/how-to-use-feature-flags-in-nestjs/)

[**ConfigCat**](https://configcat.com) also supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/).

You can also explore other code samples for various languages, frameworks, and topics here in the [ConfigCat labs](https://github.com/configcat-labs) on GitHub.

Keep up with ConfigCat on [Twitter](https://twitter.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).

## Author
[Zayyad Muhammad Sani](https://github.com/Z-MS)

## Contributions
Contributions are welcome!

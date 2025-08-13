// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Selected publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Selected public repositories",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-contacts",
          title: "contacts",
          description: "Where to find me",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contacts/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses I teach",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-ois24-paper-acceptance",
        
          title: "OIS24 Paper acceptance",
        
        description: "Paper accepted at OIS24",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/OIS24/";
          
        },
      },{id: "post-druid23-presentation",
        
          title: "DRUID23 Presentation",
        
        description: "paper presentation at WOESPR23",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/DRUID23/";
          
        },
      },{id: "post-woepsr23-presentation",
        
          title: "WOEPSR23 Presentation",
        
        description: "paper presentation at WOESPR23",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/WOEPSR23/";
          
        },
      },{id: "post-can-computers-have-consciousness",
        
          title: "Can computers have consciousness?",
        
        description: "A TEDx talk by Yoav Shoham",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/could-computers/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-we-are-online",
          title: 'We are online!',
          description: "",
          section: "News",},{id: "news-nbstata-now-available-in-the-aur",
          title: 'nbstata now available in the AUR',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%66%66%61%65%6C%65.%6D%61%6E%63%75%73%6F%34@%75%6E%69%62%6F.%69%74", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/raffaem", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0105-7124", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=5BTIdqQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

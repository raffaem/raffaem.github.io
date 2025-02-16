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
        
          window.location.href = "/blog/2024/OIS24-announcement/";
        
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
    },{id: "news-we-are-online",
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
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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

// Gallery data - This file contains all the image information
const galleryData = [
    // TEAM VIBES CATEGORY
    {
        id: 1,
        title: "Team Building Workshop",
        description: "Our team bonding over creative exercises during our annual retreat.",
        category: "team-vibes",
        categoryLabel: "Team Vibes 🤝",
        imageSrc: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Team building workshop"
    },
    {
        id: 5,
        title: "Strategy Meeting",
        description: "Weekly strategy session with our core team members.",
        category: "team-vibes",
        categoryLabel: "Team Vibes 🤝",
        imageSrc: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
        alt: "Team strategy meeting"
    },
    {
        id: 10,
        title: "Brainstorming Session",
        description: "Creative ideas flowing during our content brainstorming session.",
        category: "team-vibes",
        categoryLabel: "Team Vibes 🤝",
        imageSrc: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Team brainstorming session"
    },    {
        id: 15,
        title: "Team Building Games",
        description: "Fun team building games to strengthen our collaboration skills.",
        category: "team-vibes",
        categoryLabel: "Team Vibes 🤝",
        imageSrc: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Team building games"
    },
    {
        id: 19,
        title: "Weekly Team Huddle",
        description: "Our Monday morning huddle to align on weekly priorities and goals.",
        category: "team-vibes",
        categoryLabel: "Team Vibes 🤝",
        imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Team weekly huddle"
    },
    
    // CREATIVE CAMPAIGNS CATEGORY
    {
        id: 2,
        title: "Campus Festival Planning",
        description: "Behind the scenes of planning our biggest campus festival.",
        category: "creative-campaigns",
        categoryLabel: "Creative Campaigns 🎨",
        imageSrc: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Campus festival planning meeting"
    },
    {
        id: 6,
        title: "Social Media Campaign Launch",
        description: "Launching our new #CollegeLife campaign on Instagram.",
        category: "creative-campaigns",
        categoryLabel: "Creative Campaigns 🎨",
        imageSrc: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Social media campaign launch"
    },
    {
        id: 11,
        title: "Poster Design Workshop",
        description: "Our design team creating posters for the upcoming events.",
        category: "creative-campaigns",
        categoryLabel: "Creative Campaigns 🎨",
        imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
        alt: "Poster design workshop"
    },
    {
        id: 16,
        title: "Marketing Materials Review",
        description: "Final review of marketing materials before distribution.",
        category: "creative-campaigns",
        categoryLabel: "Creative Campaigns 🎨",
        imageSrc: "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Marketing materials review"
    },
    
    // WORK HARD PLAY HARD CATEGORY
    {
        id: 3,
        title: "Office Celebration",
        description: "Celebrating our successful semester campaign with the whole team.",
        category: "work-hard-play-hard",
        categoryLabel: "Work Hard, Play Hard 🥳",
        imageSrc: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Office celebration party"
    },
    {
        id: 7,
        title: "End of Year Party",
        description: "Our amazing team celebrating the end of a successful academic year.",
        category: "work-hard-play-hard",
        categoryLabel: "Work Hard, Play Hard 🥳",
        imageSrc: "https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        alt: "End of year party"
    },
    {
        id: 12,
        title: "Team Lunch Break",
        description: "Taking a well-deserved lunch break after a productive morning.",
        category: "work-hard-play-hard",
        categoryLabel: "Work Hard, Play Hard 🥳",
        imageSrc: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        alt: "Team lunch break"
    },
    {
        id: 18,
        title: "Game Night",
        description: "Monthly game night to unwind and have fun together.",
        category: "work-hard-play-hard",
        categoryLabel: "Work Hard, Play Hard 🥳",
        imageSrc: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Team game night"
    },
    
    // BEHIND THE SCENES CATEGORY
    {
        id: 4,
        title: "Content Creation Day",
        description: "Our media team setting up for a day of content shooting.",
        category: "behind-the-scenes",
        categoryLabel: "Behind-The-Scenes 🎥",
        imageSrc: "https://images.unsplash.com/photo-1551649001-7a2482d98d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Content creation setup"
    },
    {
        id: 8,
        title: "Video Editing Session",
        description: "Our video team working on the latest CollegeTips tutorial.",
        category: "behind-the-scenes",
        categoryLabel: "Behind-The-Scenes 🎥",
        imageSrc: "https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Video editing session"
    },
    {
        id: 13,
        title: "Equipment Setup",
        description: "Setting up cameras and lighting for our interview series.",
        category: "behind-the-scenes",
        categoryLabel: "Behind-The-Scenes 🎥",
        imageSrc: "https://images.unsplash.com/photo-1576097449798-7c7f90e1248a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Equipment setup"
    },
    
    // CAMPUS LIFE CATEGORY
    {
        id: 9,
        title: "Campus Tour",
        description: "Walking through campus to highlight the best study spots.",
        category: "campus-life",
        categoryLabel: "Campus Life 🏫",
        imageSrc: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Campus tour"
    },
    {
        id: 14,
        title: "Library Study Group",
        description: "Our study group meetup at the campus library before finals.",
        category: "campus-life",
        categoryLabel: "Campus Life 🏫",
        imageSrc: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Library study group"
    }
];

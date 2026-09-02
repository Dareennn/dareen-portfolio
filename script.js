const projects = [

    {
        id: 1,

        title:
            "AI-Powered Job Interview Simulator",

        category:
            "ai",

        number:
            "01",

        description:
            "A smart mobile application designed to help job seekers practice realistic interviews and receive personalized, structured feedback.",

        fullDescription:
            "HireReady is an AI-powered mobile application that simulates realistic interview scenarios. Users can select their target job field and position, participate in AI-generated interviews, submit audio or video responses, and receive structured feedback on their performance.",

        problem:
            "Many candidates struggle with interview preparation because traditional preparation methods can lack realistic interaction, objective feedback, personalization, and a clear way to track improvement over time.",

        solution:
            "The system combines AI-generated interview questions, speech-to-text processing, voice analysis, facial and eye-contact analysis, NLP-based evaluation, scoring, feedback reports, and progress tracking into one interview preparation workflow.",

        contribution:
            "As the Backend Developer, I developed RESTful APIs using Python, Flask, SQLAlchemy, and JWT authentication. I designed relational database models, managed migrations with Flask-Migrate, integrated OpenAI for AI-generated questions and feedback, and collaborated with the Flutter frontend team.",

        learning:
            "The project strengthened my understanding of backend architecture, REST APIs, relational databases, authentication, AI integration, and the challenges involved in connecting multiple processing components into one application.",

        technologies: [
            "Python",
            "Flask",
            "SQLAlchemy",
            "Flask-Migrate",
            "PostgreSQL",
            "JWT",
            "OpenAI API",
            "LangChain",
            "LangGraph",
            "Flutter",
            "Faster-Whisper",
            "OpenCV",
            "MediaPipe"
        ],

        type:
            "AI / BACKEND / MOBILE",

        featured:
            true
    },


    {
        id: 2,

        title:
            "AI Banking Assistant",

        category:
            "ai",

        number:
            "02",

        description:
            "An AI-powered banking assistant developed during the Google AI Finance Hackathon.",

        fullDescription:
            "A hackathon project focused on creating an AI-powered banking assistant using Flutter and Google Cloud Vision API to enhance customer engagement.",

        problem:
            "The project explored how AI capabilities could be incorporated into a banking-oriented application to create a more engaging user experience.",

        solution:
            "The team built an AI-powered banking assistant using Flutter and Google Cloud Vision API.",

        contribution:
            "I collaborated with the team during development and worked with Flutter and Google Cloud Vision API as part of the application.",

        learning:
            "The project provided hands-on experience with rapid application development, AI services, cloud technologies, and collaborative problem solving.",

        technologies: [
            "Flutter",
            "Google Cloud",
            "Vision API",
            "AI"
        ],

        type:
            "AI / MOBILE",

        featured:
            false
    },


    {
        id: 3,

        title:
            "Parking Management System",

        category:
            "iot",

        number:
            "03",

        description:
            "An IoT-based parking management solution developed during my ITI internship.",

        fullDescription:
            "An IoT parking management solution developed as part of hands-on work with smart systems and connected devices.",

        problem:
            "Parking environments can experience inefficient allocation and congestion when available spaces are not managed effectively.",

        solution:
            "The project applied IoT concepts to parking management with the goal of optimizing parking allocation and reducing congestion.",

        contribution:
            "I worked on the development of the IoT-based parking management solution during my ITI internship.",

        learning:
            "The project gave me practical experience working with IoT systems, sensors, embedded devices, and the relationship between hardware and software.",

        technologies: [
            "IoT",
            "Sensors",
            "Embedded Systems",
            "Smart Systems"
        ],

        type:
            "IOT",

        featured:
            false
    },


    {
        id: 4,

        title:
            "Temperature & Humidity Control System",

        category:
            "iot",

        number:
            "04",

        description:
            "An IoT-based environmental monitoring system developed during my ITI internship.",

        fullDescription:
            "An environmental monitoring and control system using IoT concepts to monitor temperature and humidity and support more efficient energy usage.",

        problem:
            "Environmental conditions such as temperature and humidity need to be monitored continuously in order to support efficient system operation.",

        solution:
            "The project used IoT-based monitoring to track environmental conditions and support automated control.",

        contribution:
            "I developed the IoT-based environmental monitoring system during my ITI internship.",

        learning:
            "The project strengthened my understanding of IoT systems, environmental sensors, monitoring, and software-hardware integration.",

        technologies: [
            "IoT",
            "Sensors",
            "Environmental Monitoring",
            "Embedded Systems"
        ],

        type:
            "IOT",

        featured:
            false
    },


    {
        id: 5,

        title:
            "Backend Development",

        category:
            "backend",

        number:
            "05",

        description:
            "Backend development work focused on APIs, databases, authentication, and application architecture.",

        fullDescription:
            "A collection of backend development work built while strengthening my software engineering skills and exploring backend technologies such as Flask, Express.js, REST APIs, SQLAlchemy, JWT, and relational databases.",

        problem:
            "Applications need reliable backend systems that can manage business logic, data, authentication, and communication between different parts of a system.",

        solution:
            "I worked with backend frameworks and supporting technologies to design APIs, connect applications to databases, implement authentication, and structure backend logic.",

        contribution:
            "My work has focused on backend development using Python, Flask, SQLAlchemy, REST APIs, JWT, SQL, and JavaScript-based backend technologies.",

        learning:
            "These projects have helped me build a stronger understanding of API design, databases, authentication, backend architecture, and software engineering principles.",

        technologies: [
            "Python",
            "Flask",
            "Express.js",
            "REST APIs",
            "SQLAlchemy",
            "JWT",
            "SQLite",
            "MySQL"
        ],

        type:
            "BACKEND",

        featured:
            false
    }

];


const projectsContainer =
    document.querySelector(
        "#projectsContainer"
    );


const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


const projectModal =
    document.querySelector(
        "#projectModal"
    );


const modalClose =
    document.querySelector(
        "#modalClose"
    );


const modalNumber =
    document.querySelector(
        "#modalNumber"
    );


const modalType =
    document.querySelector(
        "#modalType"
    );


const modalTitle =
    document.querySelector(
        "#modalTitle"
    );


const modalDescription =
    document.querySelector(
        "#modalDescription"
    );


const modalProblem =
    document.querySelector(
        "#modalProblem"
    );


const modalSolution =
    document.querySelector(
        "#modalSolution"
    );


const modalContribution =
    document.querySelector(
        "#modalContribution"
    );


const modalLearning =
    document.querySelector(
        "#modalLearning"
    );


const modalTechnologies =
    document.querySelector(
        "#modalTechnologies"
    );


const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );


const menuButton =
    document.querySelector(
        "#menuButton"
    );


const navLinks =
    document.querySelector(
        "#navLinks"
    );

function displayProjects(projectList) {

    projectsContainer.innerHTML = "";


    projectList.forEach(
        function (project) {

            const projectCard =
                document.createElement(
                    "article"
                );


            projectCard.className =
                "project-card";


            if (project.featured) {

                projectCard.classList.add(
                    "featured"
                );

            }


            projectCard.dataset.id =
                project.id;


            const technologyHTML =
                project.technologies
                    .map(
                        function (technology) {

                            return `
                                <span>
                                    ${technology}
                                </span>
                            `;

                        }
                    )
                    .join("");


            projectCard.innerHTML = `

                <div class="project-top">

                    <span class="project-number">
                        ${project.number}
                    </span>

                    <span class="project-type">
                        ${project.type}
                    </span>

                </div>


                <div class="project-main">

                    <div class="project-heading">

                        <h3>
                            ${project.title}
                        </h3>

                        <p>
                            ${project.description}
                        </p>

                    </div>


                    <button
                        class="project-open"
                        data-id="${project.id}"
                    >

                        Explore

                        <span>
                            ↗
                        </span>

                    </button>

                </div>


                <div class="project-bottom">

                    <div class="project-technologies">

                        ${technologyHTML}

                    </div>


                    <span class="project-arrow">
                        ↗
                    </span>

                </div>

            `;


            projectsContainer.appendChild(
                projectCard
            );

        }
    );


    addProjectButtonEvents();

    addProjectCardInteraction();

}

filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const filter =
                    button.dataset.filter;


                if (
                    filter === "all"
                ) {

                    displayProjects(
                        projects
                    );

                    return;

                }


                const filteredProjects =
                    projects.filter(
                        function (project) {

                            return (
                                project.category ===
                                filter
                            );

                        }
                    );


                displayProjects(
                    filteredProjects
                );

            }
        );

    }
);

function addProjectButtonEvents() {

    const projectButtons =
        document.querySelectorAll(
            ".project-open"
        );


    projectButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();


                    const projectId =
                        Number(
                            button.dataset.id
                        );


                    openProjectModal(
                        projectId
                    );

                }
            );

        }
    );

}

function openProjectModal(
    projectId
) {

    const project =
        projects.find(
            function (item) {

                return (
                    item.id ===
                    projectId
                );

            }
        );


    if (!project) {

        return;

    }


    modalNumber.textContent =
        project.number;


    modalType.textContent =
        project.type;


    modalTitle.textContent =
        project.title;


    modalDescription.textContent =
        project.fullDescription;


    modalProblem.textContent =
        project.problem;


    modalSolution.textContent =
        project.solution;


    modalContribution.textContent =
        project.contribution;


    modalLearning.textContent =
        project.learning;


    modalTechnologies.innerHTML =
        "";


    project.technologies.forEach(
        function (technology) {

            const element =
                document.createElement(
                    "span"
                );


            element.textContent =
                technology;


            modalTechnologies.appendChild(
                element
            );

        }
    );


    projectModal.classList.add(
        "active"
    );


    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "no-scroll"
    );

}

function closeProjectModal() {

    projectModal.classList.remove(
        "active"
    );


    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "no-scroll"
    );

}


modalClose.addEventListener(
    "click",
    closeProjectModal
);


projectModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            projectModal
        ) {

            closeProjectModal();

        }

    }
);


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains(
                "active"
            )
        ) {

            closeProjectModal();

        }

    }
);


function addProjectCardInteraction() {

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(
        function (card) {

            card.addEventListener(
                "mousemove",
                function (event) {

                    if (
                        window.innerWidth <=
                        800
                    ) {

                        return;

                    }


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width /
                        2;


                    const centerY =
                        rect.height /
                        2;


                    const rotateX =
                        (
                            (y - centerY) /
                            centerY
                        ) * -2;


                    const rotateY =
                        (
                            (x - centerX) /
                            centerX
                        ) * 2;


                    card.style.transform =
                        `
                        perspective(1000px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-5px)
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.style.transform =
                        `
                        perspective(1000px)
                        rotateX(0deg)
                        rotateY(0deg)
                        translateY(0)
                        `;

                }
            );

        }
    );

}

const magneticButtons =
    document.querySelectorAll(
        ".magnetic"
    );


magneticButtons.forEach(
    function (button) {

        button.addEventListener(
            "mousemove",
            function (event) {

                if (
                    window.innerWidth <=
                    800
                ) {

                    return;

                }


                const rect =
                    button.getBoundingClientRect();


                const centerX =
                    rect.left +
                    rect.width / 2;


                const centerY =
                    rect.top +
                    rect.height / 2;


                const moveX =
                    (
                        event.clientX -
                        centerX
                    ) * 0.15;


                const moveY =
                    (
                        event.clientY -
                        centerY
                    ) * 0.15;


                button.style.transform =
                    `
                    translate(
                        ${moveX}px,
                        ${moveY}px
                    )
                    `;

            }
        );


        button.addEventListener(
            "mouseleave",
            function () {

                button.style.transform =
                    "translate(0, 0)";

            }
        );

    }
);


document.addEventListener(
    "mousemove",
    function (event) {

        if (
            window.innerWidth <=
            800
        ) {

            return;

        }


        cursorGlow.style.left =
            `${event.clientX}px`;


        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);

menuButton.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle(
            "open"
        );

    }
);


const navigationLinks =
    navLinks.querySelectorAll(
        "a"
    );


navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove(
                    "open"
                );

            }
        );

    }
);





const revealElements =
    document.querySelectorAll(
        ".section"
    );


revealElements.forEach(
    function (element) {

        element.classList.add(
            "reveal"
        );

    }
);


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(
            element
        );

    }
);

displayProjects(
    projects
);

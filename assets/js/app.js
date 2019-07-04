new Vue ({

    //Element ciblé
    el:'#app',

    //Variables
    data: {
        page: 'home',
        links: {
            github: 'https://github.com/fadikamohamed',
            linkedIn: 'https://www.linkedin.com/in/mohamed-fadika-7052b2166/',
            email: 'fadika.mohamed02@gmail.com',
            CV: 'assets/docs/FADIKA_Mohamed.pdf'
        },

        //Présentation
        presentation: {
            lastname: 'FADIKA',
            firstname: 'Mohamed',
            picture: 'assets/img/mohamedFadikaPhoto.JPG',
            birthDate : '18 décembre 1987',
            pitch: 'Je suis un grand curieux, un petit peu touche a tout, je vois le developpement comme le meilleur moyen d\'expression pour les gens tels que moi.',
            desir: 'Je recherche actuellement une entreprise dans le cadre d\'une formation en alternance dans la quelle je pourrais parfaire mes compétences dans le developpement web et dans la programation en général.',
            /*projects: 'Dans le futur je compte reprendre des études dans la physique ou l\'ingénierie on dis que l\'avenir sourie aux audacieux.'*/
        },

        //Formation
        formation: {
            school: 'J\'ai obtenu mon Titre Professionnel "Développeur logiciel" RNCP 5927 niveau III BAC+2 à l\'Ecole du Numérique du Noyonnais (60400). Pendant cette formation j\'ai été' +
                ' formé sur différentes technologies, mais j\'ai surtout appris a apprendre.',
            techs: {
                linux: {
                    name: 'Linux : ',
                    comment: 'Linux et son terminal pour tout les exercices et projets éffectué en formation.'
                },
                html: {
                    name: 'Le HTML : ',
                    comment: 'Un langage que je connaissais deja depuis le college.'
                },
                css: {
                    name: 'Le CSS : ',
                    comment: 'Comme le html j\'y suis deja familier de puis plusieurs années.'
                },
                javaScript: {
                    name: 'Le JavaScript : ',
                    comment: 'Une découverte pour moi lors de cette formation.'
                },
                php: {
                    name: 'Le Php : ',
                    comment: 'Commencé 6 mois avant la formation, cette derniere m\'a permis d\'approfondire ce langage.'
                },
                sql: {
                    name: 'Le MySql : ',
                    comment: 'Le langage MySql et PhpMyAdmin pour la gestion des bases de données.'
                },
                regex: {
                    name: 'Les régex : ',
                    comment: 'Les expréssions régulieres pour la sécurité et les recherches.'
                },
                wordPress: {
                    name: 'Le CMS WordPress : ',
                    comment: 'Initiation a wordPress.'
                },
                git: {
                    name: 'Le gestionnaire de version Git : ',
                    comment: 'Utilisé sur tout les projets.'
                }
            },
            projects: {
                cv: {
                    name: '1e projet : ',
                    comment: 'Rélisation d\'un CV numérique premiere utilisation du javascript, ce site n\'est plus en ligne actuellement.'
                },
                eCommerce: {
                    angularJS: {
                        name : '2e projet : ',
                        comment: 'Site e-commerce avec AngularJS, éffectué en groupe de 4 personnes.'
                    },
                    jQuery: {
                        name: '3e projet : ',
                        comment: 'Site e-commerce avec jQuery cette fois ci, également éffectué en groupe de 4 personnes.'
                    },
                },
                niche: {
                    name : '4e projet : ',
                    comment : 'Réalisation d\'un site de niche avec le CMS WordPress lors d\'une initiation au CMS. Projet éffecué seul.'
                },
                vitrine: {
                    name: '5e projet : ',
                    comment: 'Site vitrine d\'une entreprise de maçonnerie en php, éffectué en groupe de 4 ce projet avait pour but de nous permetre d\'appréander PDO et le htaccess.'
                },
                perso: {
                    name: '6e projet : ',
                    comment: 'Projet de fin de formation pour la validation du diplome. Il me tiens particulierement et j\'y ai mis une grande partie de mes connaissances.',
                    link: 'https://github.com/fadikamohamed/monProjetPerso'
                }
            }
        },
        //Compétences
        skills: [
            {
                name: 'HTML / CSS',
                image: '',
                note: {
                    number: '4/5',
                    barre: 'width: 80%'
                },
                coment: ''
            },
            {
                name: 'Bootstrap',
                image: '',
                note: {
                    number: '4/5',
                    barre: 'width: 80%'
                },
                coment: 'Mon framework css de prédilection, je l\'utilise sur tout mes projets.'
            },
            {
                name: 'JavaScript / jQuery',
                image: '',
                note: {
                    number: '3/5',
                    barre: 'width: 60%'
                },
                coment: 'Je pense avoir un bon niveau avec ce langage.'
            },
            {
                name: 'Vue.js',
                image: '',
                note: {
                    number: '1/5',
                    barre: 'width: 20%'
                },
                coment: 'Néofite sur ce framework, j\'en apprend plus chaque jours.'
            },
            {
                name: 'PHP',
                image: '',
                note: {
                    number: '3/5',
                    barre: 'width: 60%'
                },
                coment: 'Certainement le langage avec le quel je me sent le plus  l\'aise.'
            },
            {
                name: 'Symfony 4',
                image: '',
                note: {
                    number: '3/5',
                    barre: 'width: 60%'
                },
                coment: 'Je l\'utilise aujourd\'hui pour chaques projets.'
            },
            {
                name: 'Ajax',
                image: '',
                note: {
                    number: '3/5',
                    barre: 'width: 60%'
                },
                coment: 'Incontournabe pour la fusion php javscript.'
            },
            {
                name: 'MySql',
                image: '',
                note: {
                    number: '3/5',
                    barre: 'width: 60%'
                },
                coment: ''
            },
            {
                name: 'Git',
                image: '',
                note: {
                    number: '3/5',
                    barre: 'width: 60%'
                },
                coment: ''
            }
        ],
        languages: [
            {
                name: 'Français',
                note: {
                    number: '4/5',
                    barre: 'width: 80%'
                },
                coment: 'fgbfgbfbfgb'
            },
            {
                name: 'Anglais',
                note: {
                    number: '3/5',
                    barre: 'width: 60%'
                },
                coment: 'fgbfgbfbfgb'
            }
        ]
    },


//Méthodes
    methods: {
        /*Routeur-------------------------------*/
        showHome: function ()
        {
            this.page = 'home'
            pixscroll = document.documentElement.scrollTop

        },
        showFormation: function ()
        {
            this.page = 'formation'
            pixscroll = document.documentElement.scrollTop
        },
        showSkills: function ()
        {
            this.page = 'skills'
            pixscroll = document.documentElement.scrollTop
        },
        showPointOfInterest: function ()
        {
            this.page = 'pointOfInterest'
            pixscroll = document.documentElement.scrollTop
        },
        /*-------------------------------------------------------------------------------*/

    }
})
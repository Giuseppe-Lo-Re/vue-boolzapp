// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
// vengono visualizzati solo i contatti il cui nome contiene le lettere inserite 
// (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

var app = new Vue(
    {
        el: '#root',
        data: {
            currentActiveElement: 0,
            newMessage: '',
            userFilterText: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]            
        },
        methods: {

            // Setta l'indice dell'elemento attivo:
            setActiveElement(index) {
                this.currentActiveElement = index;
            },

            // Aggiunge un nuovo messaggio all'array contacts:
            addNewMessage() {
                if(this.newMessage.length > 0) {
                    this.contacts[this.currentActiveElement].messages.push(
                        {
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            text: this.newMessage,
                            status: 'sent'
                        }
                    );
                    // Resetta vuoto l'input del messaggio:
                    this.newMessage = '';

                    // Richiama la funzione che aggiunge un messaggio  dopo 1 secondo:
                    setTimeout(this.returnNewMessage, 1000);
                }
            },

            // Aggiunge un messaggio di risposta:
            returnNewMessage() {
                // Pusha nell'array contacts nella posizione dell'elemento attivo un nuovo oggetto contenente il messaggio:
                this.contacts[this.currentActiveElement].messages.push(
                    {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: 'ok',
                        status: 'received'
                    }
                );
            },

            // Ricerca utenti: filtra i contatti attraverso l'input dell'utente:
            filterElementsByText() {

                // trasforma l'input dell'utente in minuscolo:
                const userInputLower = this.userFilterText.toLowerCase();
                this.contacts.forEach((element) => {

                    // trasforma gli elementi in minuscolo:
                    const elementTextLower = element.name.toLowerCase();

                    // Se l'input dell'utente in minuscolo è presente negli elementi dell'array in minuscolo:
                    if(elementTextLower.includes(userInputLower)) {
                        // la key "visible" sarà uguale a true:
                        element.visible = true;
                    } else {
                        // Altrimenti la key "visible" sarà uguale a falso:
                        element.visible = false;
                    } 
                });
            }
        }
    }
);



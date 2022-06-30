// Milestone 5
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina 
// che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

var app = new Vue(
    {
        el: '#root',
        data: {
            currentActiveElement: 0,
            newMessage: '',
            userFilterText: '',
            currentSelectElement: null,
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            isVisible: true
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            isVisible: true
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            isVisible: true
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
                            status: 'sent',
                            isVisible: true
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            isVisible: true
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            isVisible: true
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
                            status: 'received',
                            isVisible: true
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            isVisible: true
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            isVisible: true
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
                            status: 'sent',
                            isVisible: true
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            isVisible: true
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
                            status: 'sent',
                            isVisible: true
                        }
                    );
                    this.newMessage = '';

                    // Richiama la funzione  dopo 1 secondo:
                    setTimeout(this.returnNewMessage, 1000);
                }
            },

            // Aggiunge un messaggio di risposta:
            returnNewMessage() {
                this.contacts[this.currentActiveElement].messages.push(
                    {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: 'ok',
                        status: 'received',
                        isVisible: true
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

                    if(elementTextLower.includes(userInputLower)) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    } 
                });
            },

            // Taglia il testo del messaggio nel chat container:
            sliceMessage(text){
                let newText = text;
                if(text.length > 13){
                    newText = text.slice(0,20);
                    newText += "..."
                } 
                return newText
            },

            // Cancella il messaggio selezionato:
            deleteMessage(index) {
                this.currentSelectElement = null;
                this.contacts[this.currentActiveElement].messages.splice(index, 1);
            }
        }
    }
);



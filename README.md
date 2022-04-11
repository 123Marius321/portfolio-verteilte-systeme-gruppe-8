# Prüfungsfragen

## Beschreibt ein konkretes Anwendungsszenario für den entwickelten Service und schildert (in wenigen Worten) eine mögliche Gesamt-Architektur in welcher sich dieser befinden könnte.

Unser Service kann von einem Restaurant verwendet werden. Der Service ermöglicht dem Nutzer Gerichte aus seiner Speisekarte in die Datenbank einzupflegen, sie abzurufen, zu ändern und wieder zu löschen. 
Des Weiteren kann der Restaurantbesitzer durch den Service Personaldaten zu seinen Angestellten in der gleichen Datenbank sammeln und bearbeiten.
Als dritte Funktion bietet sich dem Eigentürmer die Möglichkeit den Überblick über seine Lieferanten zu wahren und deren Lieferzeitpunkte festzulegen.

Eine mögliche dem Service zugrundeliegenden Architektur ist/könnte die Schichtenarchitektur mit drei Schichten sein. 
Folgende Schichten sind empfehlenswert:
    - Darstellungsschicht: Darstellung der Webseite (Frontend)
    - Business-Logik-Schicht: Logik des Service (Backend) 
    - Datenschicht: Ablage der Daten in einer Datenbank (MongoDB)


## Welche Probleme können entstehen, wenn der entwickelte Service von mehreren Parteien verwendet wird? Beschreibt zwei Probleme sowie mögliche Lösungen.

Ein mögliches Problem könnte die Überlastung des Service aufgrund zu vieler Benutzeranfragen zur gleichen Zeit sein.
Dies könnte zur Folge haben, dass Benutzeranfragen abgelehnt werden, oder der Service ausfällt.  
Eine mögliche Lösung könnte die Anwendung des Retry-Architekturmusters sein. Bei der Anwendung des Architekturmusters werden Benutzeranfragen bei zu hoher Auslastung nicht direkt abgelehnt,  sondern nach Verzögerung erneut durchgeführt. 
Eine andere Lösung könnte Queue Based Load Leveling sein. Hierbei werden die Aufrufe an den Service nicht direkt an diesen übermittelt, sondern in einer Warteschlange zwischengespeichert. Dies führt dazu, dass der Service Anfragen in einer konstistenten Menge erhält, sodass Bedarfsspitzen kompensiert werden und ein Ausfall des Service vermieden wird. 
Der Nachteil vom Queue Based Load Leveling ist, dass keine minimalen Antwortenzeiten definiert/eingehalten werden können. Im Kontrast dazu kann die maximale Anzahl von Wiederholungsversuchen beim Retry-Architekturmuster begrenzt werden, sodass nach einer bestimmten Wartezeit der Benutzer eine Antwort erhält. 

Ein weiteres Problem könnten gleichzeitige Zugriffe zweier Personen auf das gleiche Dokument sein. Sollten beide Parteien in dieser Situation Änderungen am Dokument vornehmen, würde die Änderung der ersten Person durch die Änderung der zweiten Person überschrieben werden, ohne, dass die erste Person dies unmittelbar mitbekommt. 
Gelöst werden könnte dieses Problem, indem das passende Datenbank-Isolationslevel und Locks genutzt werden, die verhindern, dass an durch Zugriffe gesperrte Dokumente Änderungen vorgenommen werden können.


## Was ist abseits der reinen Programmierung für die Produktivsetzung des entwickelten Services zu beachten? Nenne mindestens zwei Aspekte und führe diese in ein paar Sätzen aus.

Bevor der Service veröffentlicht werden kann, sind umfangreiche Tests zu planen und durchzuführen. Hierbei sollten sowohl die Funktionen des Service an sich, als auch die Anbindung an das Frontend und die Datenbank getestet werden. Mögliche Tests wären die Durchführung von API-Requests mit Überprüfung des API-Response-Bodys auf den korrekten JSON-Inhalt.   

Empfehlenswert wäre zudem im Betrieb den Service über ein Dashboard zu überwachen (monitoring), um Metriken wie z.B. die Verfügbarkeit und Auslastung des Service zu erfassen. Bei Unregelmäßigkeiten können diese in Logs dokumentiert und Warnmeldungen an die Administratoren gesendet werden, damit Maßnahmen zur Behebung der Probleme direkt nach deren Auftreten ergriffen werden können. 
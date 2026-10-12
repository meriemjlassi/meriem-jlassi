/*import './App.css'

const student ="ali";
const age = 20;

function App() {
  
  return (
    <div>
      <h1>bienvenue {student}</h1>
      <p>vous avez {age} ans.</p>
    </div>

    
  )
}

export default App

*/
import './App.css'
import Image from './assets/meriem.jpeg'
const student = {
  nom:"jlassi",
  prenom:"meriem",
  Email:"jlassimeriem149@.com",
  telephone:"+216 92202544",
  filiere:"genie logicile et systemes d'informtique",
  anneedetude:"2026/2027",
  groupe:"glsi2",
  ville:"mahdia",
  image: Image

}


function App() {
  
  return (
    <div>

      <h1>Fiche etudiant</h1>
      <img src={student.image} alt="image de l etdiant" /><br></br>
      <strong>Nom&Prenom: </strong >{student.nom} {student.prenom} <br></br>
      <strong>Email: </strong>{student.Email} <br></br>
      <strong>telephone :</strong> {student.telephone}<br></br>
      <strong>Filiere:</strong> {student. filiere}<br></br>
      <strong>Annee d'etude:</strong>{student.anneedetude}<br></br>
      <strong>Groupe:</strong>{student.groupe}<br></br>
      <strong>Ville:</strong>{student.ville}<br></br>
      <a href ="mailto=jlassimeriem149gmail.com">contacter</a>
    </div>


    
  )
}

export default App
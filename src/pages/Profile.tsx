import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import ExploreContainer from "../components/ExploreContainer"


const Profile: React.FC = () => {
  return (
    <IonPage>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Tab Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <ExploreContainer name="Profile" />
        </IonContent>
    </IonPage>
  )
}

export default Profile
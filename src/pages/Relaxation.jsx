import { useState } from "react";
import DefaultLayout from "../layouts/default";
import RelaxationLists from "../components/RelaxationLists";

export default function Relaxation() {

    const [relaxations] = useState([
        { id: 1, videoId: "YWW1Kc7j6Do", message: "It is gonna be okay, don't worry", suggestedUser: "Mg Mg" },
        { id: 2, videoId: "ekr2nIex040", message: "It is gonna be okay, don't worry",suggestedUser: "Aunt Mg" },
        { id: 6, videoId: "YWW1Kc7j6Do", message: 'You are allowed to rest, to take a pause, and to simply be. Embrace this time to relax and recharge.', suggestedUser: "Lin Lin" },
        { id: 4, videoId: "ekr2nIex040", message: 'Close your eyes and feel the calm. Inhale peace, exhale stress. You’re on a journey to brighter days.',suggestedUser: "Su Su" },
        { id: 5, videoId: "YWW1Kc7j6Do", message: 'Every deep breath brings you closer to calmness. Let go of today’s worries, and allow yourself to feel light and free.',suggestedUser: "Tun Tun" },
    ]);

  return (
    <DefaultLayout>
        <RelaxationLists relaxations={relaxations}/>
    </DefaultLayout>
  );
}

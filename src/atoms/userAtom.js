
import { atom } from "recoil";

const userAtom = atom({
    key: "user",
    default: JSON.parse(localStorage.getItem("user-threads")),
    
});

export default userAtom;
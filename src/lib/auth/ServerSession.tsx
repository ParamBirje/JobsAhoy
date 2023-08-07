import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/AuthOptions";

async function getServerSideSession(){
    return await getServerSession(authOptions)
}

export default getServerSideSession
import fs from "fs/promises"

function Page() {
    fs.writeFile("hey.txt","doneea");
}

export default Page;
//Buscar Links
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSave = JSON.parse(myLinks) || [];

    return linksSave;
}

//Salvar links
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //Não duplicar links
    const hasLink = linksStored.some( link => link.id === newLink.id)

    if(hasLink){
        console.log('Link já existe')
        return;
    }

    //Adicionar Link na lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link Salvo')
}

//Deletar links
export function deleteLink(links, id){
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log("Link Deletado")

    return myLinks;
}
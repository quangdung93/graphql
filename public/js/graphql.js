const API_URL = '/graphql';

const get_query = `{
    quests{
        id
        title
        description
        reward
        category{
            title
        }
    }
}`;

const create_query = `mutation createQuest(
        $title: String!, 
        $description: String!, 
        $reward: Int!, 
        $category_id: Int!) 
    {
        createQuest(
            title: $title, 
            description: $description, 
            reward: $reward, 
            category_id: $category_id)
    {
        title
        description
        reward
        category{
            title
        }
    }
}`;

const update_query = `mutation updateQuest(
    $id: Int!, 
    $title: String!, 
    $description: String!, 
    $reward: Int!, 
    $category_id: Int!) 
{
    updateQuest(
        id: $id, 
        title: $title, 
        description: $description, 
        reward: $reward, 
        category_id: $category_id)
{
    id
    title
    description
    reward
    category{
        title
    }
}
}`;

async function show(){
    var result = await getData();
    document.querySelector('#result').textContent = JSON.stringify(result.data);
}

function getData(){
    var response = axios.post(API_URL, {
        query: get_query,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
}


function createApi(data){
    var response = axios.post(API_URL, {
        query: create_query,

        //Variables using when create, update, delete
        variables: data,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
}

function updateApi(data){
    var response = axios.post(API_URL, {
        query: update_query,

        //Variables using when create, update, delete
        variables: data,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
}

function deleteApi(id){
    var response = axios.post(API_URL, {
        query: `mutation deleteQuest($id: Int!) 
        {
            deleteQuest(id: $id)
        }`,

        //Variables using when create, update, delete
        variables: {
            id: id
        },
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
}


async function create(event){
    event.preventDefault();
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let reward = document.querySelector('#reward').value;
    let category_id = document.querySelector('#category_id').value;

    let data = {
        title: title,
        description: description,
        reward: parseInt(reward),
        category_id: parseInt(category_id),
    }

    const response = await createApi(data);

    document.querySelector('#result-create').textContent = JSON.stringify(response.data);
}

async function update(event){
    event.preventDefault();
    let id = document.querySelector('#update-id').value;
    let title = document.querySelector('#update-title').value;
    let description = document.querySelector('#update-description').value;
    let reward = document.querySelector('#update-reward').value;
    let category_id = document.querySelector('#update-category_id').value;

    let data = {
        id: parseInt(id),
        title: title,
        description: description,
        reward: parseInt(reward),
        category_id: parseInt(category_id),
    }

    const response = await updateApi(data);

    document.querySelector('#result-update').textContent = JSON.stringify(response.data);
}

async function destroy(event){
    event.preventDefault();
    let id = document.querySelector('#id').value;
    const response = await deleteApi(parseInt(id));

    document.querySelector('#result-delete').textContent = JSON.stringify(response.data);
}

document.querySelector("#submit-create").addEventListener("click", (e) => create(e), false);
document.querySelector("#submit-update").addEventListener("click", (e) => update(e), false);
document.querySelector("#submit-delete").addEventListener("click", (e) => destroy(e), false);
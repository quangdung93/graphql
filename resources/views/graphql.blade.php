<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Get Data</h1>
    <button onclick="show()">Get Data</button>
    <p id="result"></p>

    <hr>
    <h1>Create</h1>
    <form>
        <input type="text" id="title" placeholder="Title"/>
        <input type="text" id="description" placeholder="Description"/>
        <input type="text" id="reward" placeholder="Reward"/>
        <input type="text" id="category_id" placeholder="Category"/>
        <button id="submit-create">Create</button>
    </form>
    <p id="result-create"></p>

    <hr>
    <h1>Update</h1>
    <form>
        <input type="text" id="update-id" placeholder="ID"/>
        <input type="text" id="update-title" placeholder="Title"/>
        <input type="text" id="update-description" placeholder="Description"/>
        <input type="text" id="update-reward" placeholder="Reward"/>
        <input type="text" id="update-category_id" placeholder="Category"/>
        <button id="submit-update">Update</button>
    </form>
    <p id="result-update"></p>

    <hr>
    <h1>Delete</h1>
    <form>
        <input type="text" id="id" placeholder="ID"/>
        <button id="submit-delete">Delete</button>
    </form>
    <p id="result-delete"></p>


    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    {{-- <script src="{{ asset('js/app.min.js') }}"></script> --}}
    <script src="{{ asset('js/graphql.js') }}"></script>
    <script>
        
    </script>
</body>
</html>
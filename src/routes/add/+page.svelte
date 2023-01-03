<script>
	import { browser } from '$app/environment';
	import { firebaseConfig } from '../../../../sveltekit-firebase-9-todo/src/lib/firebaseConfig.js';
    import { initializeApp, getApps, getApp } from "firebase/app";
    import {
      getFirestore,
      collection,
      onSnapshot,
      doc,
      addDoc,
      updateDoc,
      deleteDoc,
    } from "firebase/firestore";
    
  
    const firebaseApp =
      browser &&
      (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
  
    const db = browser && getFirestore();
  
    const colRef = browser && collection(db, "todos");
  
    let todos = [];
  
    const unsubscribe =
      browser &&
      onSnapshot(colRef, (querySnapshot) => {
        let fbTodos = [];
        querySnapshot.forEach((doc) => {
          let todo = { ...doc.data(), id: doc.id };
          fbTodos = [todo, ...fbTodos];
        });
        todos = fbTodos;
      });
  
  
    let task = "";
    let error = "";
  
    const addTodo = async () => {
      if (task !== "") {
        const docRef = await addDoc(collection(db, "todos"), {
          task: task,
          isComplete: false,
          createdAt: new Date(),
        });
        error = "";
      } else {
        error = "Mầy ngu à! không nhập gì hết mà bấm cái gì?";
      }
      task = "";
    };
  
    const markTodoAsComplete = async (item) => {
      await updateDoc(doc(db, "todos", item.id), {
        isComplete: !item.isComplete,
      });
    };
  
    const deleteTodo = async (id) => {
      await deleteDoc(doc(db, "todos", id));
    };
  
    const keyIsPressed = (event) => {
      if (event.key === "Enter") {
        addTodo();
      }
    };
  </script>
  <div class="table-item">
  <input type="text" placeholder="Tên sản phẩm" bind:value={task} />
  <button class="add" on:click={addTodo}>Thêm</button>
</div>
  <ol>
    {#each todos as item}
      <li class:complete={item.isComplete}>
        <span class="left">
          {item.task}
        </span>
        <span class="right">
          <button class="left" on:click={() => markTodoAsComplete(item)}>✔</button>
          <button class="right" on:click={() => deleteTodo(item.id)}>✘</button>
        </span>
      </li>
    {:else}
      <p>Thêm đi nhìn quần què</p>
    {/each}
    <p class="error">{error}</p>
  </ol>
  
  <svelte:window on:keydown={keyIsPressed} />
  
  <style>
    .table-item{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .add{
      margin-left: 10px;
      border: 1px solid gray;
      color: whitesmoke;
      background-color: rgb(47, 255, 127);
    }
    ol{
      width: 20%;
      margin: 10px auto;
      height: auto;
      /* border: 1px solid black; */
      display: flexbox;
      justify-content: center;
      align-items: center;
    }
    .complete {
      text-decoration: line-through;
    }
    p{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 15px;
    }
    span.left{
      float: left;
    }
    span.right{
      float: right;
    }
    li{
      margin: 5px;
      width: 100%;
      padding: 5px;
    }
    .error {
      color: red;
    }
    button.left{
      margin: 0 10px;
      background-color: rgb(8, 202, 8);
      color: whitesmoke;
      border: 1px solid gray;
    }
    button.right{
      margin: 0 10px;
      background-color: red;
      color: whitesmoke;
      border: 1px solid gray;
    }
  
  </style>
  
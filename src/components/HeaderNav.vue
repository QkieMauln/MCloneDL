<template>
  <header>
    <div>
      <caption>
        <h1>{{titleName}}</h1>
        <span>MCPEDL but simple (Learning Purpose)</span>
      </caption>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
    <nav>
      <RouterLink to="/texturepacks">Texture Packs</RouterLink>
      <RouterLink to="/addons">Addons</RouterLink>
      <RouterLink to="/skinpacks">Skin Packs</RouterLink>
    </nav>
  </header>
</template>

<script lang="ts" setup>
  /** */
  import { ref } from "vue";

  const arrayTitles =
    "MCPEDL-Clone,MineScript,Bedrock Script,MineBed,AddBed,AddRock,AddCraft,AddRock,AddCraft,Craftons,Scrons,Scraft,BedCraft,BedScript,ScriptMine,MineDons".split(
      ","
    );
  var titleName = ref("MineBedr");
  setInterval(() => {
    const random = ~~(Math.random() * arrayTitles.length);
    titleName.value = arrayTitles[random];
  }, 100);/**/
</script>

<style lang="scss" scoped>
  header {
    top: 0;
    z-index: 9999;
    position: sticky;
    display: grid;
    grid-template: 4fr 6fr;
    align-items: center;
    background: $blue-dark;
    color: white;
    padding: 10px 10px;
    border-bottom: 2px solid $blue;
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      caption {
        text-align: left;
        h1 {
          font-size: 1.5rem;
          text-decoration: underline;
        }
      }
      form {
        margin-left: auto;
        * {
          padding: 7px 10px;
          border: none;
          outline: none;
        }
        input {
          background: $orange-light;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          color: white;
        }
        button {
          background: $orange;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          color: white;
          font-weight: bold;
        }
      }
    }
  }

  nav {
    display: flex;
    margin: 10px auto 0 auto;
    text-align: center;
    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      background: $orange;
      font-size: 1.15em;
      margin: 2px 10px;
      padding: 5px 10px;
      border-radius: 5px;
    }
  }
</style>


import { RouterLink } from 'vue-router';
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <RouterLink class="navbar-brand" to="/">MediCord</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/users">Users</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/indexpage">IndexPage</RouterLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <br/>
</template>

<style>
.navbar{
    background-color: #a2c579;
    font-family: Geneva, Verdana, sans-serif;
}
</style>
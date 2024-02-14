<script lang="ts">
  import { goto } from '$app/navigation';
  import { AppRoute } from '$lib/constants';
  import { signUpAdmin } from '@immich/sdk';
  import { handleError } from '../../utils/handle-error';
  import Button from '../elements/buttons/button.svelte';

  let errorMessage: string;
  let password = '';
  let confirmPassowrd = '';
  let canRegister = false;

  $: {
    if (password !== confirmPassowrd && confirmPassowrd.length > 0) {
      errorMessage = 'Le mot de passe ne correspond pas';
      canRegister = false;
    } else {
      errorMessage = '';
      canRegister = true;
    }
  }

  async function registerAdmin(event: SubmitEvent & { currentTarget: HTMLFormElement }) {
    if (canRegister) {
      errorMessage = '';

      const form = new FormData(event.currentTarget);

      const email = form.get('email');
      const password = form.get('password');
      const name = form.get('name');

      try {
        await signUpAdmin({
          signUpDto: {
            email: String(email),
            password: String(password),
            name: String(name),
          },
        });

        await goto(AppRoute.AUTH_LOGIN);
      } catch (error) {
        handleError(error, 'Unable to create admin account');
        errorMessage = 'Erreur lors de la création du compte administrateur';
      }
    }
  }
</script>

<form on:submit|preventDefault={registerAdmin} method="post" class="mt-5 flex flex-col gap-5">
  <div class="flex flex-col gap-2">
    <label class="immich-form-label" for="email">Email Admin</label>
    <input class="immich-form-input" id="email" name="email" type="email" autocomplete="email" required />
  </div>

  <div class="flex flex-col gap-2">
    <label class="immich-form-label" for="password">Mot de passe Admin</label>
    <input
      class="immich-form-input"
      id="password"
      name="password"
      type="password"
      autocomplete="new-password"
      required
      bind:value={password}
    />
  </div>

  <div class="flex flex-col gap-2">
    <label class="immich-form-label" for="confirmPassword">Confirmer le mot de passe</label>
    <input
      class="immich-form-input"
      id="confirmPassword"
      name="password"
      type="password"
      autocomplete="new-password"
      required
      bind:value={confirmPassowrd}
    />
  </div>

  <div class="flex flex-col gap-2">
    <label class="immich-form-label" for="name">Nom</label>
    <input class="immich-form-input" id="name" name="name" type="text" autocomplete="name" required />
  </div>

  {#if errorMessage}
    <p class="text-red-400">{errorMessage}</p>
  {/if}

  <div class="my-5 flex w-full">
    <Button type="submit" size="lg" fullwidth>Inscription</Button>
  </div>
</form>

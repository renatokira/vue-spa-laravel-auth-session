# Vue 3 SPA Authentication Session Laravel Scaffolding

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Clone the frontend project

```bash
git clone https://github.com/renatokira/vue-spa-laravel-authentication-session.git
```

```bash
cd vue-spa-laravel-authentication-session
```

## Install dependencies and run
```bash
npm install
```

```bash
npm run dev
```
## Screenshots
![image](https://user-images.githubusercontent.com/10859156/218463470-7f16d797-49e0-48a7-ab9f-efcf64d28360.png)
![image](https://user-images.githubusercontent.com/10859156/218464628-559ed621-cbba-4a70-84ca-6a7e6d0afc3f.png)
![image](https://user-images.githubusercontent.com/10859156/218464332-ec54a835-f6c3-4f94-a387-f0cffdef63ae.png)



# Laravel Project

### If not exist create laravel project

```bash
composer create-project laravel/laravel example-app
```
```bash
cd example-app
```


#### Database configuration in .env file
#### Ex Mysql:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

#### Or Sqlite:
```bash
touch database/database.sqlite
```

```
DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=
```

### Laravel Sanctum
Laravel Sanctum provides a featherweight authentication system for SPAs and simple APIs.
([Laravel Sanctum Git](https://github.com/laravel/sanctum)).
Documentation for Sanctum can be found on the [Laravel website](https://laravel.com/docs/sanctum).

### Install Laravel Breeze
```bash
composer require laravel/breeze --dev
php artisan breeze:install api
```

### Migrate to database
```bash
php artisan migrate
```

### Configuration in env to define the URLs and domains that can access sessions and authentication cookies created by Laravel

```bash
FRONTEND_URL=http://localhost:3000
SANCTUM_STATEFUL_DOMAINS=localhost:3000
SESSION_DOMAIN=localhost
```


### Create test user to login frontend application
```bash
php artisan tinker
```

```bash
\App\Models\User::factory()->create([ 'name' => 'Test User', 'email' => 'test@example.com']);
```

### Add in api routes(routes/api.php) to be used in frontend application laravel project:

```php
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/user/edit', function (Request $request) {
    $request->validate([
        'name' => 'required|min:2|max:255',
    ]);

    try {
        $user = $request->user();
        $user->name = $request->get('name');
        $user->save();
        return response()->json(['status' => 'Successful!']);
    } catch (\Throwable) {
        throw \Illuminate\Validation\ValidationException::withMessages([
            'name' => ['unexpected error'],
        ]);
    }
})->middleware(['auth:sanctum']);

```

### Run project
```bash
php artisan serve

```

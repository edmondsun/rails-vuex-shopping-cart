# vuex-rails-shopping-cart

<h3>Description</h3>
  rails architecture - A shopping cart built with Vue 2 and Vuex with webpack 

<h3>Image</h3>
  <p align="center" >
      <img src="./shopping-cart.png">
  </p>

<h3>Enviroment</h3>
  rails ~> 5.2.1
  ruby ~> 2.4.0
  vue ^2.5.17
  vuex ^3.0.1
  pg >= 0.18, < 2.0

<h3>Install</h3> 

``` bash
# install ruby 2.4.0
rvm install ruby 2.4.0

# insall yarn
yarn install
```

<h3>Initialize Webpacker</h3> 

``` bash
# install webpack
rails webpacker:install

# install vue
rails webpacker:install:vue
```

<h3>Execute and Run</h3> 

``` bash
# path
cd vuex-rails-shopping-cart

# excute serve
./bin/server
```

<h3>Architecture</h3>
  <pre>
  └── vuex-rails-shopping-cart
      ├── Gemfile
      ├── Gemfile.lock
      ├── Procfile
      ├── Procfile.dev
      ├── README.md
      ├── Rakefile
      ├── app
      │   ├── assets
      │   ├── channels
      │   ├── controllers
      │   ├── helpers
      │   ├── javascript
      │   ├── jobs
      │   ├── mailers
      │   ├── models
      │   └── views
      ├── bin
      │   ├── bundle
      │   ├── rails
      │   ├── rake
      │   ├── server
      │   ├── setup
      │   ├── spring
      │   ├── update
      │   ├── webpack
      │   ├── webpack-dev-server
      │   └── yarn
      ├── config
      │   ├── application.rb
      │   ├── boot.rb
      │   ├── cable.yml
      │   ├── credentials.yml.enc
      │   ├── database.yml
      │   ├── environment.rb
      │   ├── environments
      │   ├── initializers
      │   ├── locales
      │   ├── puma.rb
      │   ├── routes.rb
      │   ├── spring.rb
      │   ├── storage.yml
      │   ├── webpack
      │   └── webpacker.yml
      ├── config.ru
      ├── db
      │   ├── migrate
      │   ├── schema.rb
      │   └── seeds.rb
      ├── lib
      │   ├── assets
      │   └── tasks
      ├── log
      ├── package.json
      ├── public
      │   ├── 404.html
      │   ├── 422.html
      │   ├── 500.html
      │   ├── apple-touch-icon-precomposed.png
      │   ├── apple-touch-icon.png
      │   ├── favicon.ico
      │   └── robots.txt
      ├── shopping-cart.png
      ├── storage
      ├── test
      │   ├── application_system_test_case.rb
      │   ├── controllers
      │   ├── fixtures
      │   ├── helpers
      │   ├── integration
      │   ├── mailers
      │   ├── models
      │   ├── system
      │   └── test_helper.rb
      ├── tmp
      ├── vendor
      └── yarn.lock
  </pre>    


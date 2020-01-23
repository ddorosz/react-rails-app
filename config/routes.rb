Rails.application.routes.draw do
  get '*path', to: 'pages#root', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root to: 'pages#root', via: :all

end

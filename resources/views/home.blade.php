@extends('layouts.app')

@section('content')
  <pagina-component tamanho="12">
    <painel-component titulo="Dashboard">
      <migalhas-component v-bind:lista="{{$listaMigalhas}}"></migalhas-component>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#meuModalTeste">Large modal</button>
      <div class="row">
        <div class="col-md-4">
          <caixa-component qtd="80" titulo="Artigos" url="{{route('artigos.index')}}" cor="orange" icone="ion ion-pie-graph"></caixa-component>
        </div>
        <div class="col-md-4">
          <caixa-component qtd="1500" titulo="Usuários" url="#" cor="blue" icone="ion ion-person-stalker"></caixa-component>
        </div>
        <div class="col-md-4">
          <caixa-component qtd="3" titulo="Autores" url="#" cor="red" icone="ion ion-person"></caixa-component>
        </div>
      </div>
    </painel-component>

  </pagina-component>
    <modal-component nome="meuModalTeste"></modal-component>
@endsection

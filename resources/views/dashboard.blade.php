@extends('app')

@section('content')
  <div id="app" class="row">
    <div class="col-12 mt-3">
      <h1 class="page-header">CRUD Laravel y Vue</h1>
    </div>
    <div class="col-12">
      <div class="mb-3 d-flex justify-content-end">
        <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#create">Nueva Tarea</button>
      </div>
      <div class="table-responsive">
        <tasks-table></tasks-table>
      </div>
    </div>
    @include('create')
  </div>
@endsection

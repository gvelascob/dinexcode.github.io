#Enviar una Solicitud
<br>

<meta name="description" content="Formulario de Contacto Dinex">
<script type="text/javascript"
        src="solicitud.js"></script>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>


<form id="contact_form" action="https://dinex.zendesk.com/requests/embedded/create/"; method="POST" onsubmit="return validateForm();" enctype="multipart/form-data" novalidate="novalidate">
  <div class="rowsubmit">
    <div class="col-sm-10">
        <label class="required" for="name">Nombre:</label>
        <input id="name" name="name" type="text" class="form-control" value="" size="30" />
        <span id="name_validation" class="error"></span>
    </div> 
  </div>
  
  <div class="rowsubmit">
    <div class="col-sm-10">
        <label class="required" for="email">Correo electrónico:</label>
        <input id="email" name="email" type="text" class="form-control" value="" size="30" />
        <span id="email_validation" class="error"></span>
    </div>
  </div>
 
   <div class="rowsubmit">
    <div class="col-sm-10">
        <label class="required" for="subject">Asunto:</label>
        <input id="subject" name="subject" type="text" class="form-control" value="" size="30" />
        <span id="subject_validation" class="error"></span>
    </div>
  </div>
  
  <div class="rowsubmit">
    <div class="col-sm-10">
        <label class="required" for="description">Mensaje:</label>
        <textarea id="description" name="description" class="form-control" rows="7" cols="30"></textarea>
        <span id="description_validation" class="error"></span>
    </div>
  </div>
  
  <div class="rowend">
    <div class="col-sm-10">
        <label class="required" for="human">2 + 3 = ?</label>
        <input id="human" name="human" type="text" class="form-control" value="" size="30" placeholder="Tu respuesta"/>
        <span id="human_validation" class="error"></span>
    </div>
  </div>
  
  <div class="submitzendesk">
    <input id="submit" name="submit" type="submit" value="Enviar">

  </div>
  
</form>








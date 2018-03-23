<template>
<div id="browser">

    <b-container class="no-gutters" fluid>
      <b-row class="text-center media-window">
        <b-col md="8" class="media-box align-self-center">
          <h3>Col-8</h3>
          <!--<iframe src="https://player.vimeo.com/video/212731897" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/212731897">Extrapolate</a> from <a href="https://vimeo.com/johanrijpma">johan rijpma</a> on <a href="https://vimeo.com">Vimeo</a>.</p>-->
          <b-embed type="iframe"
           aspect="16by9"
           src="https://player.vimeo.com/video/212731897"
           allowfullscreen
          ></b-embed>
        </b-col>
        <b-col md="4" class="media-browser">
          <h3>Col-4</h3>
          <ul  id="example-1" class="list-unstyled">
<b-list-group>
  <b-list-group-item>Cras justo odio</b-list-group-item>
  <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
  <b-list-group-item>Morbi leo risus</b-list-group-item>
  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
  <b-list-group-item>Vestibulum at eros</b-list-group-item>
</b-list-group>
          </ul>
        </b-col>
      </b-row>
    </b-container>
</div>
</template>

<script>
export default {
  name: 'browser'
}
</script>


<template>
    <div class=" checking-process">
       
        <div :class="(viewType=='check'?'active':'')+' process-img check dp-ib v-b'"></div>
        <div :class="(viewType=='confirm'?'active':'')+' process-img confirm dp-ib v-b'"></div>
        <div :class="(viewType=='done'?'active':'')+' process-img done dp-ib v-b'"></div>
    </div>
</template>

<script>

export default {
  name: 'cartHeadView',
  data(){
      return {
           
      }
  },
  
  components:{

  },
  props:{
    viewType:{type:String,default:'check'}  ,
  },
  methods:{
    
  },
  created:function(){

  }
}
</script>

<style>

    .checking-process .process-img.check.active {
        background-position: 0 0;
    }
    .checking-process .process-img.check {
        width: 175px;
        height: 124px;
        background-position: 0 -124px;
        background-image: url(http://bmall.bilibili.com/static/img/img-check.a0dd3f5.png);
    }
    .v-b, .v-bottom {
        vertical-align: bottom;
    }
    .dp-ib {
        display: inline-block;
    }
    .checking-process .process-img.confirm {
        width: 191px;
        height: 117px;
        margin-left: 208px;
        margin-right: 191px;
        background-position: 0 -117px;
        background-image: url(http://bmall.bilibili.com/static/img/img-confirm.b0f9f4a.png);
    }
    .checking-process .process-img.done {
        width: 115px;
        height: 26px;
        margin-bottom: 33px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAaCAYAAACEuGN0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDdDQ0IwNjM2RUI5MTFFNkJBMEZGMjRCNUY1OTlBMTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDdDQ0IwNjQ2RUI5MTFFNkJBMEZGMjRCNUY1OTlBMTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEN0NDQjA2MTZFQjkxMUU2QkEwRkYyNEI1RjU5OUExNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEN0NDQjA2MjZFQjkxMUU2QkEwRkYyNEI1RjU5OUExNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsWFlUIAAARrSURBVHja7Fo7ctswEIU8ugBSpqRvEKpLk4I6AnkE6QhSF7ujjiAeQTqCWLhJJ6ZMZ5YpzSMo4MxDvN4BSIgEKcn2zmBk0xAI7NvP24Unp9NJfMr7kLtPFbwfmV7ipU+/ftcfWzUqNdY3rkOJUY71wh/fv12dZy7UiD2u9YJPF3lW4+Dp3UesJ3Ce+vdoAF2tPkqYXZzpHQHGEF4awFB2+N2H1ECmHwHM2gtCNQo18gvvJVPjHp8xPDYa6+Xec6bKhyGs0tVDnh3mzZBfbVZby+ZCAJY4h8Qe67FUYw9ewKPF1iEdzLsY5nTAUCPOANRlTROYMSy/gPJ8yvOZ53hpWKeEx2rwcxZZBHtWddnw5BJ1JtjsiR2yi9EcofAZ1jqeaUDUa+4tYJYd1jJ579zyN5MeeL41AU6lUgw3mYrblZQosuhIalzmtxnbETl71tWjDBJa9hY1GIu4VTBjQ96pDzRx/H7fqCAMIZGnAhePdTEgiRBer/2F15kqyp30e2+RzYYgEdcipcXLU09sVtryqALyzd+m6sFXVsDXRCJT6P/tkRNdWWoALzFJvY/EMP+AA26w58DiuSXCb1+x7W/SAKbEHioP5VKTh0vOZmsgf5Jn+ueHnqGn7BhuJBmiAei1pYMUgUAUyGN9JW/JWyYwF6TuFAOC+SbUTy0KifuAqby60nFfeakmCIl6XhA221QSSEvdWMJb8xblZ+K1Bda3/py3lCwlCf/aGFcjgRlQMMfImUtNt0mMb2OoWQNgLmFrjQOmRMlD5ElBQnlImhgSZ/DRfI/Ye6yeeWcptr0V4PDGDUDatjDUFRTQ9yalIkbUlSzJFm8QDFBJztDlNkh/fyte+7CSGEnu4pm1BT2q8Qfj0VN4oICusZlYeWdqAXKHTc091Wt7vDMUDjcObeTCMa/uWGRw9boA5ccO6SEgemlyrrdsFqz1oSfhcZEEm11hs0sSCrU1J8LvveCaFPU+8pS0PM+JweTMGXgXaQUQI4N3awMsHImU5ARoFKlJkfJKDWgMBVf41O0u3xe8mtGeW6KELHxW7HllmS8M4VV7WkK8MSJliwawMkQrrZu8xejGbxqA5eoQFBAlLMVwN/Vdak0KZoxa8yReL7T3zNNSBgL3noiBPUM3J8FaleE7KSOQrRFkFM8Ei41gpRGzet0IyAmLrcRlJWaGkBnCoVb4gqQInUb25LuBhf025eqdA6vXRlc32YcFE/eakSE/aHa7J2GI55Gc5I5iZHAjKDInICwNc7aYV5BcvwHABzwrMNe1OggAZIj3L225V+l3wY3D6xUYPPBgIBwlDrSvSxVL0yCCR8QGJmnr5ugCftIAzNbSYcqF+Vrqf5PDAkLKmgKcuaYG9pw4AKo7VxJzl2xd2/3qXOk09w4mANWhR/8bR647P2SOS87S/w4SwuJNjO6AAzbdfrww46iwN1ueXsGgZi1hMGsAKCbEJzujC7UjkUsYiFTEGGymgRwETEfAxZWLvIK83UQkjc//CTAATPh/fCzJzqYAAAAASUVORK5CYII=);
    }
    .checking-process .process-img.confirm.active {
        background-position: 0 0;
    }
    .checking-process {
        height: 160px;
        margin-top: 20px;
    }
</style>

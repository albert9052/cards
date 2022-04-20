<template>
  <div class="pop-up-window-footer">
    <div class="ctn ctn-components-2">
      <MyPopUpWindowFooterButtonAttachFile />
      <MyPopUpWindowFooterButtonDownloadFile />
      <h5
        v-show="
          $store.state.mode == 'edit' && !$store.state.cardToShow.attachmentURL
        "
      >
        {{
          $store.state.tempParameters.attachmentFile
            ? $store.state.tempParameters.attachmentFile.name
            : "<-- Please choose a file"
        }}
      </h5>
    </div>
    <div>
      <MyPopUpWindowFooterButtonConfirm />
    </div>
  </div>
</template>

<script>
import MyPopUpWindowFooterButtonAttachFile from "@/components/MyPopUpWindow/MyPopUpWindowFooterButtonAttachFile.vue";
import MyPopUpWindowFooterButtonDownloadFile from "@/components/MyPopUpWindow/MyPopUpWindowFooterButtonDownloadFile.vue";
import MyPopUpWindowFooterButtonConfirm from "@/components/MyPopUpWindow/MyPopUpWindowFooterButtonConfirm.vue";

export default {
  name: "MyPopUpWindowFooter",
  components: {
    MyPopUpWindowFooterButtonAttachFile,
    MyPopUpWindowFooterButtonDownloadFile,
    MyPopUpWindowFooterButtonConfirm,
  },
};
</script>

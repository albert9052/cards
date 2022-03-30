<template>
  <div class="pop-up-window-footer">
    <MyPopUpWindowFooterButtonAttachFile />
    <MyPopUpWindowFooterButtonDownloadFile />
  </div>
</template>

<script>
import MyPopUpWindowFooterButtonAttachFile from "@/components/MyPopUpWindow/MyPopUpWindowFooterButtonAttachFile.vue";
import MyPopUpWindowFooterButtonDownloadFile from "@/components/MyPopUpWindow/MyPopUpWindowFooterButtonDownloadFile.vue";

export default {
  name: "MyPopUpWindowFooter",
  components: {
    MyPopUpWindowFooterButtonAttachFile,
    MyPopUpWindowFooterButtonDownloadFile,
  },
};
</script>

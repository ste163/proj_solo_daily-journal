import { slideAnim } from "./animations/anim_slide.js"
import { renderEntryForm } from "./form/EntryForm.js"
import { listEntryLatest } from "./page_home/EntryLatestList.js"
import { listDataTotal } from "./page_home/DataTotalList.js"

listEntryLatest();
listDataTotal();
slideAnim(renderEntryForm);
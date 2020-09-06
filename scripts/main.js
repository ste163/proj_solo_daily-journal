import { slideAnim } from "./animations/anim_slide.js"
import { renderEntryForm } from "./form/EntryForm.js"
import { EntryLatest } from "./page_home/EntryLatest.js"
import { listDataTotal } from "./page_home/DataTotal.js"

EntryLatest();
listDataTotal();
slideAnim(renderEntryForm);
import { initiateNavBar } from "../navBar.js"
import { getEntries } from "../data-providers/EntryProvider.js"
import { listEntryAll } from "./EntryAllList.js";
import { FilterBar } from "./FilterBar.js";

initiateNavBar();
getEntries();
listEntryAll();
FilterBar();
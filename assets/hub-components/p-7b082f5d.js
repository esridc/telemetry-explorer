const i={"hub:initiative:events":!1,"hub:initiative:content":!0,"hub:initiative:discussions":!1},e=["hub:initiative","hub:initiative:create","hub:initiative:delete","hub:initiative:edit","hub:initiative:view","hub:initiative:events","hub:initiative:content","hub:initiative:discussions","hub:initiative:workspace","hub:initiative:workspace:overview","hub:initiative:workspace:dashboard","hub:initiative:workspace:details","hub:initiative:workspace:settings","hub:initiative:workspace:collaborators","hub:initiative:workspace:content","hub:initiative:workspace:metrics","hub:initiative:manage"],t=[{permission:"hub:initiative",services:["portal"],licenses:["hub-premium"]},{permission:"hub:initiative:create",dependencies:["hub:initiative"],authenticated:!0,privileges:["portal:user:createItem"]},{permission:"hub:initiative:view",services:["portal"],authenticated:!1,licenses:["hub-premium","hub-basic"]},{permission:"hub:initiative:edit",dependencies:["hub:initiative"],authenticated:!0,entityEdit:!0},{permission:"hub:initiative:delete",dependencies:["hub:initiative"],authenticated:!0,entityOwner:!0},{permission:"hub:initiative:events",dependencies:["hub:initiative:view"]},{permission:"hub:initiative:content",dependencies:["hub:initiative:edit"]},{permission:"hub:initiative:discussions",dependencies:["hub:initiative:view"]},{permission:"hub:initiative:workspace",dependencies:["hub:feature:workspace"],environments:["devext","qaext"]},{permission:"hub:initiative:workspace:overview",dependencies:["hub:initiative:workspace","hub:initiative:view"]},{permission:"hub:initiative:workspace:dashboard",dependencies:["hub:initiative:workspace","hub:initiative:view"]},{permission:"hub:initiative:workspace:details",dependencies:["hub:initiative:workspace","hub:initiative:edit"]},{permission:"hub:initiative:workspace:settings",dependencies:["hub:initiative:workspace","hub:initiative:edit"],entityOwner:!0},{permission:"hub:initiative:workspace:collaborators",dependencies:["hub:initiative:workspace","hub:initiative:edit"]},{permission:"hub:initiative:workspace:content",dependencies:["hub:initiative:workspace","hub:initiative:edit"]},{permission:"hub:initiative:workspace:metrics",dependencies:["hub:initiative:workspace","hub:initiative:edit"]},{permission:"hub:initiative:manage",dependencies:["hub:initiative:edit"]}],a={},n=["hub:initiativeTemplate","hub:initiativeTemplate:create","hub:initiativeTemplate:delete","hub:initiativeTemplate:edit","hub:initiativeTemplate:view","hub:initiativeTemplate:workspace","hub:initiativeTemplate:workspace:overview","hub:initiativeTemplate:workspace:dashboard","hub:initiativeTemplate:workspace:details","hub:initiativeTemplate:workspace:collaborators","hub:initiativeTemplate:workspace:settings","hub:initiativeTemplate:manage"],s=[{permission:"hub:initiativeTemplate",availability:["alpha"],services:["portal"]},{permission:"hub:initiativeTemplate:create",dependencies:["hub:initiativeTemplate"],authenticated:!0,privileges:["portal:user:createItem"]},{permission:"hub:initiativeTemplate:view",dependencies:["hub:initiativeTemplate"]},{permission:"hub:initiativeTemplate:edit",dependencies:["hub:initiativeTemplate"],authenticated:!0,entityEdit:!0},{permission:"hub:initiativeTemplate:delete",dependencies:["hub:initiativeTemplate"],authenticated:!0,entityOwner:!0},{permission:"hub:initiativeTemplate:workspace",dependencies:["hub:feature:workspace"]},{permission:"hub:initiativeTemplate:workspace:overview",dependencies:["hub:initiativeTemplate:workspace","hub:initiativeTemplate:view"]},{permission:"hub:initiativeTemplate:workspace:dashboard",dependencies:["hub:initiativeTemplate:workspace","hub:initiativeTemplate:edit"]},{permission:"hub:initiativeTemplate:workspace:details",dependencies:["hub:initiativeTemplate:workspace","hub:initiativeTemplate:edit"]},{permission:"hub:initiativeTemplate:workspace:collaborators",dependencies:["hub:initiativeTemplate:workspace","hub:initiativeTemplate:edit"]},{permission:"hub:initiativeTemplate:workspace:settings",dependencies:["hub:initiativeTemplate:workspace","hub:initiativeTemplate:edit"],entityOwner:!0},{permission:"hub:initiativeTemplate:manage",dependencies:["hub:initiativeTemplate:edit"]}];export{t as I,s as a,e as b,n as c,i as d,a as e}
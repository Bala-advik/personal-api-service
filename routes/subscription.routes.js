import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get Subscriptions" })
);

subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "Get a Subscription" })
);

subscriptionRouter.post("/", (req, res) =>
  res.send({ title: "Create Subscriptions" })
);

subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "Update a Subscriptions" })
);

subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "Delete a Subscription" })
);

subscriptionRouter.get("/user/:id", (req, res) =>
  res.send({ title: "Get User Subscriptions" })
);

subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "Cancel a Subscription" })
);

subscriptionRouter.get("/updcoming-renewal", (req, res) =>
  res.send({ title: "Update Subscriptions" })
);

export default subscriptionRouter;
